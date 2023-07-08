import { Box, Card, CardContent, CardMedia, TextField, Typography } from '@mui/material'
import React from 'react'
import Button from '@mui/material/Button';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { green, grey, lightGreen } from '@mui/material/colors';
import PriceCard from './PriceCard';

 const information = [
    {
        name: 'FreshStart Credit Boost',
        description: "Experience the power of a FreshStart with our exclusive credit repair package. We'll work diligently to dispute and remove erroneous information from your credit report, setting you on the path to financial success",
        features: ["Thorough analysis of your credit report to identify errors and inaccuracies.", "Expertly crafted dispute letters to challenge and remove incorrect information.", "One formal challenge to the credit bureaus to rectify discrepancies and boost your creditworthiness."],
        cta: "Get started with a one-time payment of just $149.99. Reclaim control over your credit and start your FreshStart journey today!",
        price: "$149.99"    
    },
    {
        name: "Ultimate Credit Transformation",
        description: "Unleash the full potential of your credit with our Ultimate Credit Transformation package. We'll provide you with comprehensive credit repair solutions, empowering you to overcome obstacles and achieve your financial goals.",
        features: ["Everything included in Package 1, plus:", "Multiple powerful challenges to the credit bureaus, ensuring thorough investigation and resolution of inaccuracies.", "Exclusive Credit Booster feature to accelerate the credit repair process and propel your credit score to new heights."],
        cta: " Take advantage of this life-changing opportunity with a one-time payment of only $249.99. Unlock the door to a brighter financial future and embrace your Ultimate Credit Transformation!",
        price: "$249.99",

    },
    {
        name: "Elite Credit Mastery",
        description: "Experience the epitome of credit repair and monitoring services with our Elite Credit Mastery package. Gain unlimited access to unrivaled solutions that not only repair your credit but also safeguard it for the long term.",
        features: ["Everything included in Package 2, plus:", "Unlimited challenges to the credit bureaus, allowing us to relentlessly pursue the removal of any remaining inaccuracies or negative items.", "Comprehensive credit monitoring to provide real-time updates and alerts on changes to your credit report, ensuring ongoing protection and peace of mind."],
        cta: "Elevate your credit journey with a one-time payment of just [Price]. With Elite Credit Mastery, you'll be equipped with the tools and expertise needed to master your credit and unlock limitless financial possibilities.",
        price: "",
        options: [
            {
                name: "Credit Watch",
                type: "Subscription",
                price: "$4.99/monthly"
            }
        ]
    }
]

const CTA = () => {
  return (
    <>
        <Card sx={{ borderRadius: 0}}>
        <CardContent sx={{position: 'absolute'}}>
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
                120 DAY MONEY BACK GUARANTEE
            </Typography>
            <Box sx={{ display: 'flex', direction: 'row', justifyContent: 'center', alignItems: 'center', overflowX: 'scroll', overflowWrap: 'none', position: 'absolute', paddingBlock: '5vh 5vh'}} >
                {information.map((tier, i) => {
                    return <PriceCard key={i*33} tier={tier} />
                })}
                
            </Box>
         

            
        </CardContent>

        <CardContent sx={{height: {xs:'100vh', }, padding: 0}} >
            <CardMedia 
                title='my pic'
                id='Headliner Image of Woman'
                sx={{ objectFit: 'cover',height:{xs: '100vh'}, padding: 0}}
                image='https://images.pexels.com/photos/5710942/pexels-photo-5710942.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            />
        </CardContent>
        </Card>
    </>
  )
}

export default CTA