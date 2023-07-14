import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { grey, lightGreen } from '@mui/material/colors';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const TestimonialCard = ({testimonial:{name, image, stars, review, points}}) => {
  return (
    <>
        <Card sx={{marginInline: '2vw'}} >
            
        <CardContent sx={{bgcolor: grey[900], position: 'absolute', opacity: '75%',  minHeight: {xs:'750px'}, width:'380px',}}>

        </CardContent>
        <CardContent
        justifyContent='center' 
        alignItems='center'
            sx={{  minHeight: {xs:'750px'}, width:'380px', display:'flex', position: 'absolute', flexDirection: 'column', paddingBlockStart: {xs:'35vh', sm:'25vh'}}}
            >
                <Typography variant='subtitle' component='div' sx={{color: lightGreen[500], fontSize: '1.75rem'}}>
                <span style={{fontWeight: 'bold', color: '#EEE', fontSize:'1.75rem'}}>{name}</span> <span><AddCircleOutlineRoundedIcon sx={{fontSize: '1.75rem'}}/></span>{points}pts
                </Typography>
                <Stack direction='row' sx={{}}  justifyContent='space-evenly' alignItems='center'>
                    {stars.map((i) => {
                        return <StarRateRoundedIcon key={i*132+132} sx={{fontSize: '3rem', color:lightGreen[500]}} />
                    })}
                </Stack>
                <Typography variant='body' component='div' sx={{color: grey[50], fontSize: '1.25rem'}}>
                {review}
                </Typography>
            </CardContent>
            <CardMedia 
                title='image'
                id='image'
                image={image}
                sx={{objectFit: 'cover', minHeight: {xs:'750px'}, width: '380px'}}
            />

 
        </Card>
    </>
  )
}

export default TestimonialCard