import { MongoClient } from 'mongodb';
import sgMail from '@sendgrid/mail';
import crypto from 'crypto';
import connectDB from '../../../lib/connectDB';
import CreditConsultation from '../../../lib/models/creditconsultation';

const { MONGODB_URI, MONGODB_DB, SENDGRID_API_KEY, EMAIL_FROM, ENCRYPTION_KEY } = process.env;

function encryptData(data) {
  const cipher = crypto.createCipheriv('aes-256-cbc', ENCRYPTION_KEY, crypto.randomBytes(16));
  let encryptedData = cipher.update(data, 'utf8', 'hex');
  encryptedData += cipher.final('hex');
  return encryptedData;
}

function decryptData(encryptedData) {
  const decipher = crypto.createDecipheriv('aes-256-cbc', ENCRYPTION_KEY, crypto.randomBytes(16));
  let decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
  decryptedData += decipher.final('utf8');
  return decryptedData;
}

function isValidSSN(ssn) {
  return /^[0-9]{9}$/.test(ssn);
}

function isValidPhoneNumber(phoneNumber) {
  return /^[0-9]{10}$/.test(phoneNumber);
}

function isValidEmail(email) {
  // Basic email validation using regular expression
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handleData(req, res) {
  if (req.method === 'POST') {
    const { name, email, ssn, phoneNumber, message, formId } = req.body;
    console.log(req.body);

    // Validate form fields
    if (!name || !email || !ssn || !phoneNumber || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
    }

    if (!isValidSSN(ssn)) {
      return res.status(400).json({ message: 'Invalid SSN.' });
    }

    if (!isValidPhoneNumber(phoneNumber)) {
      return res.status(400).json({ message: 'Invalid phone number.' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ message: 'Invalid email address.' });
    }

    // Additional validation for name and message fields
    if (name.length < 2 || name.length > 100) {
      return res.status(400).json({ message: 'Name must be between 2 and 100 characters.' });
    }

    if (message.length < 10 || message.length > 1000) {
      return res.status(400).json({ message: 'Message must be between 10 and 1000 characters.' });
    }

    try {
      // Encrypt sensitive data
      const encryptedSSN = encryptData(ssn);

      // Store data in MongoDB
      connectDB()
      let form = await new CreditConsultation()

      form.type = formId
      form.name = name
      form.email = email 
      form.ssn = encryptedSSN
      form.message = message
      form.phoneNumber = phoneNumber 

      form.save();

      // Send email notification using SendGrid
      sgMail.setApiKey(SENDGRID_API_KEY);
      const msg = {
        to: 'maliekjdavis24@gmail.com',
        from: EMAIL_FROM,
        subject: 'New Inquiry Received',
        text: `You have received a new inquiry from ${name}.\n\nSSN: ${ssn}\nPhone Number: ${phoneNumber}\n\nMessage: ${message}`,
      };
      await sgMail.send(msg);

      res.status(200).json({ message: 'Data stored and notification sent successfully.' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'An error occurred while handling the data.' });
    }
  } else {
    res.status(404).json({ message: 'Invalid request method.' });
  }
}
