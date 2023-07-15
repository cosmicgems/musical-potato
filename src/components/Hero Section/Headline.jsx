import { Box, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { green, grey, lightGreen } from '@mui/material/colors';
import FreeConsultation from '../CTA/FreeConsultation';
import { SelfImprovementRounded } from '@mui/icons-material';
import { motion } from "framer-motion"
const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration:2,
        staggerChildren: 0.5
      }
    }
  }
const Headline = () => {
  return (
    <>
        <Card sx={{ borderRadius: 0}}>
        <CardContent sx={{bgcolor: grey[900], position: 'absolute', opacity: '50%', height: '100vh', width: '100%'}}>

        </CardContent>
        <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        >
        <CardContent sx={{position: 'absolute', width: '100%', paddingInline: {sm: '17.5%'}}}>
        <motion.div
        drag
        whileDrag={{ scale: 1.25 }}
        whileHover={{ scale: 1.25 }}
        dragSnapToOrigin
        dragConstraints={{
        top: -25,
        left: -25,
        right: 25,
        bottom: 25,
        }}>
            <Typography component='div' variant='h6' sx={{width: '100%', textAlign: 'center', color: lightGreen[500], textShadow: '1px 1px #64DD17', fontSize: '3rem', marginBlockStart: {xs:'30vh', md:'20vh' ,xl:'30vh'},}}>
                <SelfImprovementRounded sx={{color: lightGreen[500], fontSize: {xs:'4rem',sm: '4rem'}}} />
            </Typography>            
        </motion.div>
  
        <motion.div
        drag
        whileDrag={{ scale: 1.25 }}
        whileHover={{ scale: 1.25 }}
        dragSnapToOrigin
        dragConstraints={{
        top: -25,
        left: -25,
        right: 25,
        bottom: 25,
        }}>
            <Typography component='div' variant='h6' sx={{width: '100%', textAlign: 'center', color: grey[50], textShadow: '1px 1px #64DD17', fontSize: {xs:'3rem',md:'2.25rem',xl:'3rem',}}}>
                Turn Back The Clock
            </Typography>            
        </motion.div>

        <motion.div
        drag
        whileDrag={{ scale: 1.25 }}
        whileHover={{ scale: 1.25 }}
        dragSnapToOrigin
        dragConstraints={{
        top: -25,
        left: -25,
        right: 25,
        bottom: 25,
        }}>
            <Typography component='div' variant='h6' sx={{width: '100%', textAlign: 'center', color: grey[50], textShadow: '1px 1px #64DD17', fontSize: {xs:'3rem',md:'2.25rem',xl:'3rem',}}}>
                SHAPE YOUR FUTURE!
            </Typography>            
        </motion.div>

        <motion.div
        drag
        whileDrag={{ scale: 1.25 }}
        whileHover={{ scale: 1.25 }}
        dragSnapToOrigin
        dragConstraints={{
        top: -25,
        left: -25,
        right: 25,
        bottom: 25,
        }}>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', color: grey[50], fontSize: {xs:'2rem',md:'1.5rem',xl:'2rem',}}}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize:{xs: '2rem'}}}/></span> Improved Credit Score
            </Typography>            
        </motion.div>

        <motion.div
        drag
        whileDrag={{ scale: 1.25 }}
        whileHover={{ scale: 1.25 }}
        dragSnapToOrigin
        dragConstraints={{
        top: -25,
        left: -25,
        right: 25,
        bottom: 25,
        }}>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', color: grey[50], fontSize: {xs:'2rem',md:'1.5rem',xl:'2rem',}}}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize: {xs: '2rem'}}}/></span> Increased Financial Opportunities
            </Typography>            
        </motion.div>

        <motion.div
        drag
        whileDrag={{ scale: 1.25 }}
        whileHover={{ scale: 1.25 }}
        dragSnapToOrigin
        dragConstraints={{
        top: -25,
        left: -25,
        right: 25,
        bottom: 25,
        }}>
            <Typography component='div' variant='p' sx={{width: '100%', textAlign: 'center', marginBlockEnd: '2vh',  color: grey[50], fontSize: {xs:'2rem',md:'1.5rem',xl:'2rem',}}}>
                <span><DoneOutlineRoundedIcon sx={{color: lightGreen[500], fontSize: {xs: '2rem'}}}/></span> Enhanced Financial Well-being
            </Typography>            
        </motion.div>


         <motion.div
         whileHover={{
            scale: 1.2,
            transition: { duration: .25 },
        }}
        whileTap={{ scale: 0.9 }}
         >
            <Box sx={{paddingInline: '20vw'}}>
                        <Box sx={{marginBottom: 'auto', bgcolor: lightGreen[500], borderRadius: '5px'}}>
                            
                            <FreeConsultation/>
                        </Box>    
            </Box>            
         </motion.div>


        </CardContent>            
        </motion.div>


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