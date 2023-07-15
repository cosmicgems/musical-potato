import { Card, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import React from 'react'
import StarRateRoundedIcon from '@mui/icons-material/StarRateRounded';
import { grey, lightGreen } from '@mui/material/colors';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';

const TestimonialCard = ({testimonial:{name, image, stars, review, points}}) => {
  return (
    <>
        <Card sx={{marginInline: '2vw'}} >
            
        <CardContent sx={{bgcolor: grey[900], position: 'absolute', opacity: '75%',  minHeight: {xs:'750px', lg:'500px', xl:'550px'}, width:{xs:'380px', xl:'480px'}, borderRadius: '1px'}}>

        </CardContent>
        <CardContent
        justifyContent='center' 
        alignItems='center'
            sx={{  minHeight: {xs:'750px', lg:'500px', xl:'550px'}, width:{xs:'380px', xl: '480px'}, display:'flex', position: 'absolute', flexDirection: 'column', paddingBlockStart: {xs:'35vh', sm:'25vh', lg:'10vh'}}}
            >
                <Typography variant='subtitle' component='div' sx={{color: lightGreen[500], fontSize:{xs:'1.75rem', lg:'1.25rem', xl:'1.75rem'}}}>
                <span style={{fontWeight: 'bold', color: '#EEE', }}>{name}</span> <span><AddCircleOutlineRoundedIcon sx={{fontSize: {xs:'1.75rem', lg:'1rem'}}}/></span>{points}pts
                </Typography>
                <Stack direction='row' sx={{}}  justifyContent='space-evenly' alignItems='center'>
                    {stars.map((i) => {
                        return <StarRateRoundedIcon key={i*132+132} sx={{fontSize: {xs:'3rem', lg:'2rem'}, color:lightGreen[500]}} />
                    })}
                </Stack>
                <Typography variant='body' component='div' sx={{color: grey[50], fontSize: {xs:'1.25rem', lg:'1rem', xl:'1.1rem'}}}>
                {review}
                </Typography>
            </CardContent>
            <CardMedia 
                title='image'
                id='image'
                image={image}
                sx={{objectFit: 'cover', minHeight: {xs:'750px', lg:'500px', xl:'550px'}, width: {xs:'380px', xl: '480px'}}}
            />

 
        </Card>
    </>
  )
}

export default TestimonialCard