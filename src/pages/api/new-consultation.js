import sgMail from '@sendgrid/mail';
import connectDB from '../../../lib/connectDB';
import CreditConsultation from '../../../lib/models/creditconsultation';

const { SENDGRID_API_KEY, EMAIL_FROM } = process.env;

function isValidPhoneNumber(phoneNumber) {
  return /^[0-9]{10}$/.test(phoneNumber);
}

function isValidEmail(email) {
  // Basic email validation using regular expression
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export default async function handleData(req, res) {
  if (req.method === 'POST') {
    const { name, email, phoneNumber, message, formId } = req.body;
    console.log(req.body);
    // Validate form fields
    if (!name || !email || !phoneNumber || !message) {
      return res.status(400).json({ message: 'All fields are required.' });
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
      // Store data in MongoDB
      await connectDB();
      const form = new CreditConsultation({
        type: formId,
        name,
        email,
        phoneNumber,
        message,
      });
      await form.save();

      // Send email notification using SendGrid
      sgMail.setApiKey(SENDGRID_API_KEY);
      const msg = {
        to: 'maliekjdavis24@gmail.com',
        from: EMAIL_FROM,
        subject: 'New Inquiry Received',
        text: `You have received a new inquiry from ${name}.\n\nPhone Number: ${phoneNumber}\n\nMessage: ${message}`,
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
