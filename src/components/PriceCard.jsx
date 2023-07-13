import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { grey, lightGreen } from '@mui/material/colors';
import FreshStartCreditBoost from './CTA/FreshStartCreditBoost';

const PriceCard = ({tier: {name, description, features, price, options, cta, button, id}}) => {
    const formData = {
        button, id, price
    };

  return (
    <>
        <Card sx={{minHeight: '65vh', marginInline: '3vw', width: {xs:'85vw', sm:'480px'}, }}>
            <CardContent sx={{}}>
            <span><RocketLaunchRoundedIcon sx={{color: lightGreen[500], fontSize: {sm: '3rem'}}}/></span>
                <Typography sx={{width: '100%', textAlign: 'center', fontWeight: 'bold', fontSize:{sm:'1.5rem'}, marginBlockEnd:{xs:'1vh'} }} variant='p' component='div'>
                    {name}
                </Typography>
                <Typography sx={{width: '100%', textAlign: 'center', fontSize: {xs:'.65rem', sm:'.75rem'}, marginBlockEnd:{xs:'2vh'} }} variant='body' component='div'>
                    {description}
                </Typography>
                <ul className='mb-3'  style={{listStyleType:'initial', listStylePosition: 'inside',}}>
                    {features?.map((f, i) => {
                        return (
                            <li key={i*3} className='mb-1'>
                                <Typography variant='p' sx={{fontSize: {xs:'.65rem', sm:'.85rem'}}}>
                                    {f}
                                </Typography>
                            </li>
                        )
                    })}
                </ul>
                <Typography variant='h5' component='div' sx={{width: '100%', textAlign: 'center', fontWeight: 'bold', color: lightGreen[500], marginBlock: '2vh', fontSize:{sm:'2.5rem'}}}>
                    {price}
                </Typography>
                <Typography sx={{width: '100%', textAlign: 'center',  marginBlockEnd: '3vh', fontSize:{xs:'.65rem',sm:'.75rem'}}} variant='body' component='div'>
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