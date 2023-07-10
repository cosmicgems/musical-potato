import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { grey, lightGreen } from '@mui/material/colors';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const TestimonialCard = ({testimonial:{name, image, stars, review, points}}) => {
  return (
    <>
        <Card sx={{marginInline: '2vw'}} >
            
        <CardContent sx={{bgcolor: grey[900], position: 'absolute', opacity: '75%',  minHeight: {xs:'600px'}, width:'380px',}}>

        </CardContent>
        <CardContent
        justifyContent='center' 
        alignItems='center'
            sx={{  minHeight: {xs:'600px'}, width:'380px', display:'flex', position: 'absolute', flexDirection: 'column', paddingBlockStart: {xs:'35vh', sm:'25vh'}}}
            >
                <Typography variant='subtitle' component='div' sx={{color: lightGreen[500]}}>
                <span style={{fontWeight: 'bold', color: '#EEE'}}>{name}</span> <span><AddCircleOutlineRoundedIcon sx={{fontSize: '1rem'}}/></span>{points}pts
                </Typography>
                <Stack direction='row' sx={{}}  justifyContent='space-evenly' alignItems='center'>
                    {stars.map((i) => {
                        return <StarRateRoundedIcon key={i*132+132} sx={{fontSize: '3rem', color:lightGreen[500]}} />
                    })}
                </Stack>
                <Typography variant='body' component='div' sx={{color: grey[50]}}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea eaque blanditiis corrupti cumque. Magnam atque doloremque dicta quidem accusantium culpa aperiam itaque rem laboriosam!
                </Typography>
            </CardContent>
            <CardMedia 
                title='image'
                id='image'
                image={image}
                sx={{objectFit: 'cover', minHeight: {xs:'600px'}, width: '380px'}}
            />

 
        </Card>
    </>
  )
}

export default TestimonialCard