import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { grey, lightGreen } from '@mui/material/colors';
import FreshStartCreditBoost from './CTA/FreshStartCreditBoost';
import { SelfImprovementRounded } from '@mui/icons-material';

const PriceCard = ({tier: {name, description, features, price, options, cta, button, id}}) => {
    const formData = {
        button, id, price
    };

  return (
    <>
        <Card sx={{minHeight: {xs:'65vh', sm:'50vh'}, marginInline: '3vw', width: {xs:'85vw', sm:'480px'}, backgroundColor: `rgba(255, 255, 255, 0.8)`  }}>
            <CardContent sx={{}}>
            <span><SelfImprovementRounded sx={{color: lightGreen[500], fontSize: {xs:'4rem',sm: '4rem'}}}/></span>
                <Typography sx={{width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize:{xs:'1.75rem',sm:'2rem'}, marginBlockEnd:{xs:'1vh'} }} variant='p' component='div'>
                    {name}
                </Typography>
                <Typography sx={{width: '100%', textAlign: 'center', fontSize: {xs:'.9rem', sm:'1rem'}, marginBlockEnd:{xs:'2vh'} }} variant='body' component='div'>
                    {description}
                </Typography>
                <ul className='mb-3'  style={{listStyleType:'initial', listStylePosition: 'inside',}}>
                    {features?.map((f, i) => {
                        return (
                            <li key={i*3} className='mb-1'>
                                <Typography variant='p' sx={{fontSize: {xs:'1rem', sm:'1rem'}}}>
                                    {f}
                                </Typography>
                            </li>
                        )
                    })}
                </ul>
                <Typography variant='h5' component='div' sx={{width: '100%', textAlign: 'center', fontWeight: 'bold', color: lightGreen[500], marginBlock: '2vh', fontSize:{xs: '2rem', sm:'3.5rem'}}}>
                    {price}
                </Typography>
                <Typography sx={{width: '100%', textAlign: 'center',  marginBlockEnd: '3vh', fontSize:{xs:'.9rem',sm:'1rem'}}} variant='body' component='div'>
                    {cta}
                </Typography>

            <Box sx={{marginBottom: 'auto', bgcolor: lightGreen[500], borderRadius: '5px'}}>
                
                <FreshStartCreditBoost formData={formData}/>
            </Box>
            </CardContent>
        </Card>
    </>
  )
}

export default PriceCard