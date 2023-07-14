import { Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import PriceCard from '../PriceCard'
import { grey, lightGreen } from '@mui/material/colors'
import TestimonialCard from './TestimonialCard'
import { SelfImprovementRounded } from '@mui/icons-material'

const testimonials = [
  {
    name: 'Samantha Reed',
    image:'https://images.pexels.com/photos/3727461/pexels-photo-3727461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    stars: [1,2,3,4,5,],
    points: 75,
    review: "Credit Zen has truly been my guiding light on the path to financial freedom. Thanks to the exceptional support and expertise of Maliek and the Credit Zen team, I have not only regained control over my life but also gained a deeper understanding of credit and finances. They have empowered me with knowledge that I never thought possible, allowing me to make smarter decisions for a brighter future. With Credit Zen by my side, I am equipped to navigate any financial challenge that comes my way."
  },
  {
    name: 'The Carter Family',
    image:'https://images.pexels.com/photos/4545160/pexels-photo-4545160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars:  [1,2,3,4,],
    points: 89,
    review: "Thanks to Credit Zen, my family's progress has taken a complete 180-degree turn. Initially, we were lost and had no direction, constantly stressing about bills and facing rejection when it came to financing opportunities. But then we found Maliek and the incredible team at Credit Zen. They not only knew what needed to be done but also had the expertise to execute it flawlessly. Now, we have a clear vision for our financial future and feel empowered to achieve our goals. Credit Zen truly lives up to its name by bringing peace and prosperity into our lives!"
  },
  {
    name: 'James Morrison',
    image:'https://images.pexels.com/photos/5593083/pexels-photo-5593083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars:  [1,2,3,4,5,],
    points: 117,
    review: "Credit Zen is an absolute game-changer! Initially seeking help to improve my personal credit, I was blown away by the wisdom and insight of the Credit Zen team. They truly went above and beyond, not only addressing my concerns but also understanding the unspoken needs. The tailored solution they crafted not only skyrocketed my personal credit but also provided a solid foundation for my business to thrive. With Credit Zen by your side, there are no limits to what you can achieve!"
  },
  {
    name: "La'Mont Henderson",
    image:'https://images.pexels.com/photos/9705763/pexels-photo-9705763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars:  [1,2,3,],
    points: 47,
    review: "I recently had the pleasure of working with Credit Zen and I must say, they did a commendable job in removing inquiries and negative items from my credit report. Their dedication and expertise were evident throughout the process. However, I must admit that I had hoped for a more significant increase in my credit score. Nonetheless, I appreciate their efforts and remain hopeful for future improvements."
  },
  {
    name: 'Douglas Stevenson',
    image:'https://images.pexels.com/photos/7220509/pexels-photo-7220509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    stars:  [1,2,3,4,5,],
    points: 75,
    review: "Credit Zen truly came through for me when everyone else turned me away. When I felt hopeless and stuck, Maliek and the incredible team at Credit Zen refused to accept defeat. They worked tirelessly to explore every possible solution, never giving up on improving my credit score and ultimately transforming the quality of life for my family. Thanks to their unwavering dedication, my credit score has significantly increased and we are now enjoying a brighter future. I can't recommend Credit Zen enough for their determination, expertise, and commitment to helping others succeed."
  },
]

const Testimonials = () => {
  return (
    <Card elevation={0} className='green-gradient-background' sx={{bgcolor: grey[900], minHeight: {xs:'125vh', sm:'100vh'}, borderRadius: 0}}>

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
        
      
            <Typography component='div' variant='h6' sx={{ marginBlockStart: '6vh',width: '100%', textAlign: 'center', color: lightGreen[500]}}>
                  <SelfImprovementRounded sx={{  fontSize: '2rem'}} />
            </Typography>
            <Typography component='div' variant='h5' sx={{width: '100%', textAlign: 'center', color: lightGreen[500], fontWeight: 'bold'}}>
                Credit Zen
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