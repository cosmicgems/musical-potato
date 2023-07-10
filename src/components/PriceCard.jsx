import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { grey, lightGreen } from '@mui/material/colors';

const PriceCard = ({tier: {name, description, features, price, options, cta, button}}) => {
  return (
    <>
        <Card sx={{minHeight: '65vh', marginInline: '3vw', width: {xs:'85vw', sm:'480px'}, }}>
            <CardContent sx={{}}>
            <span><RocketLaunchRoundedIcon sx={{color: lightGreen[500], fontSize: {sm: '3rem'}}}/></span>
                <Typography sx={{width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize:{sm:'2.5rem'}, marginBlockEnd:{xs:'1vh'} }} variant='p' component='div'>
                    {name}
                </Typography>
                <Typography sx={{width: '100%', textAlign: 'center', fontSize: {xs:'.65rem', sm:'1.15rem'}, marginBlockEnd:{xs:'2vh'} }} variant='body' component='div'>
                    {description}
                </Typography>
                <ul className='mb-3'  style={{listStyleType:'initial', listStylePosition: 'inside',}}>
                    {features?.map((f, i) => {
                        return (
                            <li key={i*3} className='mb-1'>
                                <Typography variant='p' sx={{fontSize: {xs:'.65rem', sm:'1.15rem'}}}>
                                    {f}
                                </Typography>
                            </li>
                        )
                    })}
                </ul>
                <Typography variant='h5' component='div' sx={{width: '100%', textAlign: 'center', fontWeight: 'bold', color: lightGreen[500], marginBlock: '2vh', fontSize:{sm:'2.5rem'}}}>
                    {price}
                </Typography>
                <Typography sx={{width: '100%', textAlign: 'center', fontSize: '.65rem' , marginBlockEnd: '3vh', fontSize:{xs:'.65rem',sm:'1.15rem'}}} variant='body' component='div'>
                    {cta}
                </Typography>

            <Box sx={{marginBottom: 'auto', bgcolor: lightGreen[500], borderRadius: '5px'}}>
                
                <Button type='button' variant='contained' fullWidth size='large' sx={{color: grey[50]}} >
                    {button}
                </Button>
            </Box>
            </CardContent>
        </Card>
    </>
  )
}

export default PriceCard