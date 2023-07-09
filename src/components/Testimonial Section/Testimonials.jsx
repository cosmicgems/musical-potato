import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import PriceCard from '../PriceCard'
import { grey, lightGreen } from '@mui/material/colors'
import TestimonialCard from './TestimonialCard'

const Testimonials = () => {
  return (
    <Card sx={{bgcolor: '#000000', minHeight: '100vh', borderRadius: 0}}>

            <CardContent
            sx={{  maxWidth: '100%', minWidth:'100%', display:'flex', overflowX: 'scroll', position: 'absolute', paddingInline: 0, overflowWrap: 'unset', marginBlockStart: '30vh'}}
            >
                <Stack direction='row' justifyContent="center" alignItems='center' style={{display:'flex', textAlign:'center', paddingInline: 0}}>
                <TestimonialCard/>
                </Stack>
            </CardContent>
        <CardContent sx={{paddingInline: 0, position: 'absolute', width:'100%'}}>
            <Typography component='div' variant='h5' sx={{width: '100%', textAlign: 'center', marginBlockStart: '6vh', color: lightGreen[500], fontWeight: 'bold'}}>
                Credit Gurus
            </Typography>
            <Typography component='div' variant='h6' sx={{width: '100%', textAlign: 'center', color: lightGreen[500]}}>
                WE&apos;RE IN THIS TOGETHER
            </Typography>
            <Typography component='div' variant='subtile' sx={{width: '100%', textAlign: 'center', color: grey[50], paddingInline: '6vw'}}>
                No matter your credit goals!
            </Typography>
            <Typography component='div' variant='subtitle' sx={{width: '100%', textAlign: 'center', color: grey[50], paddingInline: '3vw'}}>
              Some of our happy clients
            </Typography>
         

            
        </CardContent>
    </Card>
  )
}

export default Testimonials