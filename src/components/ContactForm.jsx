import { Box, Button, TextField } from '@mui/material';
import { grey, red } from '@mui/material/colors';
import React, { useState } from 'react'

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [ssn, setSSN] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Validate form fields
      if (!name || !email || !ssn || !phoneNumber || !message) {
        console.log('All fields are required.');
        return;
      }
  
      if (!isValidSSN(ssn)) {
        console.log('Invalid SSN.');
        return;
      }
  
      if (!isValidPhoneNumber(phoneNumber)) {
        console.log('Invalid phone number.');
        return;
      }
  
      try {
        // Encrypt SSN
        const encryptedSSN = encryptData(ssn);
  
        const response = await fetch('/api/handleData', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ name, email, ssn: encryptedSSN, phoneNumber, message }),
        });
  
        if (response.ok) {
          // Handle success
          console.log('Data stored and notification sent successfully.');
          // Reset form fields
          setName('');
          setEmail('');
          setSSN('');
          setPhoneNumber('');
          setMessage('');
        } else {
          // Handle error
          console.log('An error occurred while handling the data.');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };
  
  return (
    <form onSubmit={handleSubmit }>
        <div style={{paddingInline: '6vw', marginBlockStart: '3vh'}}>
            <TextField fullWidth size='small' className='mb-2' sx={{}} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
            <TextField fullWidth size='small' className='mb-2' sx={{}} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
            <TextField fullWidth size='small' className='mb-2' sx={{}} type="text" value={ssn} onChange={(e) => setSSN(e.target.value)} placeholder="SSN" required />
            <TextField fullWidth size='small' className='mb-2' sx={{}} type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="Phone Number" required />
            <TextField fullWidth size='small' className='mb-2' sx={{}} multiline rows={4} value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />            
        </div>

        <div style={{paddingInline: '17.5vw'}}>
            <Box sx={{marginBottom: 'auto', bgcolor: red[500], borderRadius: '5px', marginBlockEnd: '3vh'}}>
                    
                    <Button type='button' variant='contained' fullWidth size='large' sx={{color: grey[50]}} >
                        Submit
                    </Button>
            </Box>
        </div>

            
    </form>
  )
}

export default ContactForm