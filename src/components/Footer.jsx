import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material'
import { Card, CardContent, Stack, Typography } from '@mui/material'
import { blue, grey, pink, red } from '@mui/material/colors'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Card sx={{bgcolor: grey[900], borderRadius: 0,paddingBlock: {xs: '2vh'}}} >
        <Stack direction='row' justifyContent="space-between"  alignItems='center' sx={{display:'flex', textAlign:'center', paddingInline: {xs:'25vw',sm:'33vw'}, }}>
          <div>
            <Instagram  sx={{fontSize: {xs:'2rem', sm: '3rem'}, color: pink[500]}}/>
          </div>
          <div>
            <Facebook  sx={{fontSize: {xs:'2rem', sm: '3rem'}, color: blue['A700']}}/>
          </div>
          <div>
            <Twitter  sx={{fontSize: {xs:'2rem', sm: '3rem'}, color:blue[400]}}/>
          </div>
          <div>
            <YouTube  sx={{fontSize: {xs:'2rem', sm: '3rem'}, color: red[900]}}/>
          </div>
        </Stack>
       <Typography variant='overline' component='div' sx={{width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize: {xs: '1rem'}, color: grey[50]}}>
        CREDIT GURUS Copyright &copy; 2023. All rights reserved.
       </Typography>
     
      </Card>
    </>
  )
}

export default Footer