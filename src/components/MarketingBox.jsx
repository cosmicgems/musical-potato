import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import { blue, green, grey, lightGreen, red } from '@mui/material/colors';
import { PlaylistRemove } from '@mui/icons-material';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import FreeConsultation from './CTA/FreeConsultation';

const MarketingBox = () => {
  return (
    <Box sx={{paddingInline: {xs:'3vw', lg: '17.5vw'}, paddingBlockEnd: '3vh', marginBlockEnd: '5vh'}}>

        <Grid container spacing={3} sx={{}}>
            <Grid item xs={12} sx={{}}>
                <Typography variant='h5' component='div' sx={{width: '100%', textAlign: 'center', marginBlockEnd: '3vh'}}>
                    Credit Repair Solutions
                </Typography>
                <Typography variant='p' component='div' sx={{paddingInline: {xs: '6vw'}, marginBlockEnd: {xs:'1vh'}}}>
                Are past credit mistakes holding you back? Our expert team at <span className='company-name'>Credit Zen</span> is here to help you break free from the burden of negative inquiries and incorrect personal information on your credit report.
                </Typography>
                <Typography variant='p' component='div' sx={{width: '100%', paddingInline: {xs:'8vw'}}}>
                    With our personalized credit solutions, we can:
                </Typography>
            </Grid>

            <Grid item xs={12} sx={{}}> 

                <Grid container spacing={3} sx={{paddingInline: '12vw'}}>
                    <Grid item sx={{}}>
                        <ul style={{listStyleType:'initial', listStylePosition: 'inside',}}>
                            <li style={{marginBlockEnd: '2vh'}}>                   
                                    <PlaylistRemove sx={{fontSize: '3rem', color: lightGreen[500], marginInlineEnd: '2vw'}} />
                                    <Typography variant='p' sx={{fontSize: '1rem', fontWeight: 'bold'}}>
                                        REMOVE NEGATIVE INQUIRIES
                                    </Typography>
                                    <Typography variant='p' component='div' sx={{width: '100%', paddingInlineStart: '6vw'}}>
                                    We&apos;ll meticulously analyze your credit report, identify inaccuracies, and launch strategic disputes to remove those damaging negative marks, giving your creditworthiness a significant boost.
                                    </Typography>
                          
                            </li>
                            <li style={{marginBlockEnd: '2vh'}}>                   
                                    <ChecklistRoundedIcon sx={{fontSize: '3rem', color: lightGreen[500], marginInlineEnd: '2vw'}} />
                                    <Typography variant='p' sx={{fontSize: '1rem', fontWeight: 'bold'}}>
                                        CORRECT ERRORS
                                    </Typography>
                                    <Typography variant='p' component='div' sx={{width: '100%', paddingInlineStart: '6vw'}}>
                                    Our skilled professionals will work diligently to challenge incorrect or outdated personal information, ensuring your credit report accurately reflects your financial standing.
                                    </Typography>
                          
                            </li>
                            <li>                   
                                    <AutoFixHighRoundedIcon sx={{fontSize: '3rem', color: lightGreen[500], marginInlineEnd: '2vw'}} />
                                    <Typography variant='p' sx={{fontSize: '1rem', fontWeight: 'bold'}}>
                                        ENHANCE CREDIT WORTHINESS
                                    </Typography>
                                    <Typography variant='p' component='div' sx={{width: '100%', paddingInlineStart: '6vw'}}>
                                    By addressing these issues head-on, we empower you to improve your creditworthiness, which can increase your chances of loan approvals, better interest rates, and access to financial opportunities.
                                    </Typography>
                          
                            </li>
                        </ul>

                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{}}>
                <Box sx={{paddingInline: {sm: '17vw'}}}>
                    <Typography sx={{width:'100%', textAlign:'center', marginBlockEnd: '2vh'}} variant='p' component='div'>
                        Partner with us and witness the transformation as we pave the way to a brighter financial future. 
                    </Typography>
                    <Box fullWidth sx={{bgcolor: lightGreen[500], borderRadius:'5px'}}>
                        <FreeConsultation/>
                    </Box>
                </Box>

            </Grid>
        </Grid>
            
  

    </Box>

  )
}

export default MarketingBox