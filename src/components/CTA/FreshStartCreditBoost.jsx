import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { TextField } from '@mui/material';
import { lightGreen } from '@mui/material/colors';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'5px'
};

export default function FreshStartCreditBoost({formData: {button, id, price}}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [secureNumber, setSecureNumber] = useState('')
  const [message, setMessage] = useState('')

  return (
    <div style={{borderRadius: '5px'}}>
      <Button onClick={handleOpen}>{button}</Button>
      <Modal
      sx={{borderRadius: '5px'}}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Credit Zen
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Let&apos;s Get Started On Your Journey to Financial Freedom
          </Typography>
          <form>
            <div>
              <TextField variant='standard' fullWidth className='mb-2' value={name} label='Name' sx={{}} onChange={(e)=> setName(e.target.value)} />
              <TextField variant='standard' fullWidth className='mb-2' value={phone} label='Phone' sx={{}} onChange={(e)=> setPhone(e.target.value)} />
              <TextField variant='standard' fullWidth className='mb-2' value={email} label='Email' sx={{}} onChange={(e)=>setEmail(e.target.value)} />
              <TextField variant='standard' fullWidth className='mb-2' value={secureNumber} label='SSN' sx={{}} onChange={(e)=>setSecureNumber(e.target.value)} />
              <TextField variant='standard' fullWidth className='mb-2' multiline rows={3} value={message} label='Message' sx={{}} onChange={(e)=>setMessage(e.target.value)} />
            </div>
            <Box sx={{width:'100%', bgcolor: lightGreen[500], borderRadius: '5px'}}>
              <Button sx={{width: '100%', paddingInline:'17.5vw'}} type='submit' variant='filled'>
                Send
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </div>
  );
}