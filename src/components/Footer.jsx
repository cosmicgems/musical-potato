import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Button, Card, CardContent, Stack, Typography } from '@mui/material'
import { blue, grey, pink, red } from '@mui/material/colors'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Card elevation={0} sx={{bgcolor: grey[900], borderRadius: 0,paddingBlock: {xs: '2vh'}}} >
        <Stack direction='row' justifyContent="space-evenly"  alignItems='center' sx={{display:'flex', textAlign:'center', paddingInline: {xs:'35vw',sm:'40vw'}, }}>
      
          

          <Button href='https://www.facebook.com/profile.php?id=100094328307545&mibextid=LQQJ4d'>
            <Facebook  sx={{fontSize: {xs:'2rem', sm: '3rem'}, color: blue['A700']}}/>            
          </Button>


          <Button href='https://www.youtube.com/channel/UCaf99hnIqmuJK66La9eLz5w'>
<YouTube  sx={{fontSize: {xs:'2rem', sm: '3rem'}, color: red[900]}}/>
          </Button>
       
        </Stack>
       <Typography variant='overline' component='div' sx={{width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: {xs: '.55rem', sm: '1rem'}, color: grey[50]}}>
        <a href=''>MY CREDIT ZEN</a> Copyright &copy; 2023. All rights reserved.
       </Typography>
     
      </Card>
    </>
  )
}

export default Footer