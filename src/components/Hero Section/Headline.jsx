import { Box, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { green, grey, lightGreen } from '@mui/material/colors';

const Headline = () => {
  return (
    <>
        <Card sx={{ borderRadius: 0}}>
        <CardContent sx={{bgcolor: grey[900], position: 'absolute', opacity: '50%', height: '100vh', width: '100%'}}>

        </CardContent>
        <CardContent sx={{position: 'absolute'}}>
            <Typography component='div' variant='h6' sx={{width: '100%', textAlign: 'center', marginBlockStart: '45vh', color: grey[50], textShadow: '1px 1px #64DD17'}}>
                Turn back the clock, SHAPE YOUR FUTURE!
            </Typography>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', color: grey[50] }}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize:{xs: '3rem'}}}/></span>Remove Incorrect Personal Information
            </Typography>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', color: grey[50]}}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize: {xs: '3rem'}}}/></span>Debt Validation and Custom Disputes
            </Typography>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', marginBlockEnd: '2vh',  color: grey[50]}}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize: {xs: '3rem'}}}/></span>Remove Incorrect Personal Information
            </Typography>

         

            <Box sx={{marginBottom: 'auto', bgcolor: lightGreen[500], borderRadius: '5px'}}>
                
                <Button type='button' variant='contained' fullWidth size='large' sx={{color: grey[50]}} >
                    SHAPE MY FUTURE!
                </Button>
            </Box>
        </CardContent>

        <CardContent sx={{height: {xs:'100vh', }, padding: 0}} >
            <CardMedia 
                title='my pic'
                id='Headliner Image of Woman'
                sx={{ objectFit: 'cover',height:{xs: '100vh'}, padding: 0}}
                image='https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
            />
        </CardContent>
        </Card>
    </>
  )
}

export default Headline