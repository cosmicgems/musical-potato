import { MongoClient } from 'mongodb';
import sgMail from '@sendgrid/mail';
import crypto from 'crypto';

const { MONGODB_URI, MONGODB_DB, SENDGRID_API_KEY, NOTIFICATION_EMAIL, ENCRYPTION_KEY } = process.env;

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
  // Implement your SSN validation logic here
  // Return true if SSN is valid, otherwise false
  return /^[0-9]{9}$/.test(ssn);
}

function isValidPhoneNumber(phoneNumber) {
  // Implement your phone number validation logic here
  // Return true if phone number is valid, otherwise false
  return /^[0-9]{10}$/.test(phoneNumber);
}

export default async function handleData(req, res) {
  if (req.method === 'POST') {
    const { name, email, ssn, phoneNumber, message } = req.body;

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

    try {
      // Encrypt sensitive data
      const encryptedSSN = encryptData(ssn);

      // Store data in MongoDB
      const client = await MongoClient.connect(MONGODB_URI, { useUnifiedTopology: true });
      const db = client.db(MONGODB_DB);
      const collection = db.collection('data');
      await collection.insertOne({ name, email, ssn: encryptedSSN, phoneNumber, message });
      client.close();

      // Send email notification using SendGrid
      sgMail.setApiKey(SENDGRID_API_KEY);
      const msg = {
        to: NOTIFICATION_EMAIL,
        from: NOTIFICATION_EMAIL,
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
