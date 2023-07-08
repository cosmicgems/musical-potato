import { Box, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { green, grey, lightGreen } from '@mui/material/colors';

const Headline = () => {
  return (
    <>
        <Card sx={{ borderRadius: 0}}>
        <CardContent sx={{position: 'absolute'}}>
            <Typography component='div' variant='h6' sx={{width: '100%', textAlign: 'center', marginBlockStart: '12vh'}}>
                Turn back the clock, SHAPE YOUR FUTURE!
            </Typography>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', }}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize:{xs: '3rem'}}}/></span>Remove Incorrect Personal Information
            </Typography>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center',}}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize: {xs: '3rem'}}}/></span>Debt Validation and Custom Disputes
            </Typography>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', marginBlockEnd: '2vh' }}>
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
                image='https://images.pexels.com/photos/3891063/pexels-photo-3891063.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
        </CardContent>
        </Card>
    </>
  )
}

export default Headline