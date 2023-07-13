import { Box, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { green, grey, lightGreen } from '@mui/material/colors';
import FreeConsultation from '../CTA/FreeConsultation';

const Headline = () => {
  return (
    <>
        <Card sx={{ borderRadius: 0}}>
        <CardContent sx={{bgcolor: grey[900], position: 'absolute', opacity: '50%', height: '100vh', width: '100%'}}>

        </CardContent>
        <CardContent sx={{position: 'absolute', width: '100%', paddingInline: {sm: '17.5%'}}}>
            <Typography component='div' variant='h6' sx={{width: '100%', textAlign: 'center', marginBlockStart: '30vh', color: grey[50], textShadow: '1px 1px #64DD17', fontSize: '3rem'}}>
                Turn back the clock, SHAPE YOUR FUTURE!
            </Typography>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', color: grey[50], fontSize: '2rem' }}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize:{xs: '2rem'}}}/></span> Improved Credit Score
            </Typography>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', color: grey[50], fontSize: '2rem'}}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize: {xs: '2rem'}}}/></span> Increased Financial Opportunities
            </Typography>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', marginBlockEnd: '2vh',  color: grey[50], fontSize: '2rem'}}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize: {xs: '2rem'}}}/></span> Enhanced Financial Well-being
            </Typography>

         
<Box sx={{paddingInline: '20vw'}}>
            <Box sx={{marginBottom: 'auto', bgcolor: lightGreen[500], borderRadius: '5px'}}>
                
                <FreeConsultation/>
            </Box>    
</Box>

        </CardContent>

        <CardContent sx={{height: {xs:'100vh', }, padding: 0}} >
            <CardMedia 
                title='my pic'
                id='Headliner Image of Woman'
                sx={{ objectFit: 'cover',height:{xs: '100vh'}, padding: 0}}
                image='https://images.pexels.com/photos/312839/pexels-photo-312839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            />
        </CardContent>
        </Card>
    </>
  )
}

export default Headline