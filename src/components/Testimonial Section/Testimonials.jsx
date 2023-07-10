import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import PriceCard from '../PriceCard'
import { grey, lightGreen } from '@mui/material/colors'
import TestimonialCard from './TestimonialCard'

const testimonials = [
  {
    name: 'Samantha Reed',
    image:'https://images.pexels.com/photos/3727461/pexels-photo-3727461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stars: [1,2,3,4,5,],
    points: 75,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea eaque blanditiis corrupti cumque. Magnam atque doloremque dicta quidem accusantium culpa aperiam itaque rem laboriosam!'
  },
  {
    name: 'The Carter Family',
    image:'https://images.pexels.com/photos/4545160/pexels-photo-4545160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars:  [1,2,3,4,],
    points: 89,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea eaque blanditiis corrupti cumque. Magnam atque doloremque dicta quidem accusantium culpa aperiam itaque rem laboriosam!'
  },
  {
    name: 'James Morrison',
    image:'https://images.pexels.com/photos/5593083/pexels-photo-5593083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars:  [1,2,3,4,5,],
    points: 117,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea eaque blanditiis corrupti cumque. Magnam atque doloremque dicta quidem accusantium culpa aperiam itaque rem laboriosam!'
  },
  {
    name: 'Javon Henderson',
    image:'https://images.pexels.com/photos/9705763/pexels-photo-9705763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars:  [1,2,3,],
    points: 47,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea eaque blanditiis corrupti cumque. Magnam atque doloremque dicta quidem accusantium culpa aperiam itaque rem laboriosam!'
  },
  {
    name: 'Douglas Stevenson',
    image:'https://images.pexels.com/photos/7220509/pexels-photo-7220509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars:  [1,2,3,4,5,],
    points: 75,
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ea eaque blanditiis corrupti cumque. Magnam atque doloremque dicta quidem accusantium culpa aperiam itaque rem laboriosam!'
  },
]

const Testimonials = () => {
  return (
    <Card sx={{bgcolor: '#000000', minHeight: {xs:'125vh', sm:'100vh'}, borderRadius: 0}}>

            <CardContent
            sx={{  maxWidth: '100%', minWidth:'100%', display:'flex', overflowX: 'scroll', position: 'absolute', paddingInline: 0, overflowWrap: 'unset', marginBlockStart: {xs:'25vh',sm:'23vh'}}}
            >
                <Stack direction='row' justifyContent="center" alignItems='center' style={{display:'flex', textAlign:'center', paddingInline: 0}}>
                {testimonials.map((testimonial, i) => {
                  return <CardContent sx={{}} key={i*99+99}><TestimonialCard testimonial={testimonial} /></CardContent>
                })}
                
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