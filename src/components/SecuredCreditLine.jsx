import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import QueryStatsRoundedIcon from '@mui/icons-material/QueryStatsRounded';
import { blue, green, grey, lightGreen, red } from '@mui/material/colors';
import { PlaylistRemove } from '@mui/icons-material';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import AutoFixHighRoundedIcon from '@mui/icons-material/AutoFixHighRounded';
import ArchitectureRoundedIcon from '@mui/icons-material/ArchitectureRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import DesignServicesRoundedIcon from '@mui/icons-material/DesignServicesRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';

const SecuredCreditLine = () => {
  return (
    <Box sx={{paddingInline: '3vw', paddingBlockStart: '5vh', bgcolor: lightGreen[700]}}>

        <Grid container spacing={3} sx={{color: grey[50]}}>
            <Grid item xs={12} sx={{}}>
                <Typography variant='h5' component='div' sx={{width: '100%', textAlign: 'center', marginBlockEnd: '2vh', color: grey[50], fontWeight: 'bold'}}>
                    Credit BOOSTER
                </Typography>
                <Typography className='mb-2' variant='p' component='div' sx={{ width: '100%', textAlign: 'center'}}>
                Build a Stronger Credit Foundation and Unlock New Possibilities!
                </Typography>
                <Typography variant='p' component='div' sx={{width: '100%', textAlign: 'center', marginBlockEnd: '3vh'}}>
                Is a poor credit score hindering your financial progress? At <span className='company-name'>Credit Gurus</span>, we understand the importance of having a solid credit profile. Our secured credit line assistance offers you the opportunity to rebuild your credit and showcase responsible financial behavior. 
                </Typography>
                <Typography variant='p' component='div' sx={{width: '100%', textAlign: 'center'}}>
                Here&apos;s how we help: 
                </Typography>
            </Grid>

            <Grid item xs={12} sx={{}}> 

                <Grid container spacing={3} sx={{paddingInline: '12vw'}}>
                    <Grid item sx={{}}>
                        <ul style={{listStyleType:'initial', listStylePosition: 'inside',}}>
                            <li style={{marginBlockEnd: '3vh'}}>                   
                                    <ArchitectureRoundedIcon sx={{fontSize: '3rem', color: grey[50], marginInlineEnd: '2vw'}} />
                                    <Typography variant='p' sx={{fontSize: '1rem', fontWeight: 'bold', color: grey[50]}}>
                                        EXPERT GUIDANCE
                                    </Typography>
                                    <Typography variant='p' component='div' sx={{width: '100%', paddingInlineStart: '6vw'}}>
                                    Our experienced team will provide personalized guidance on establishing and managing secured credit lines effectively. We&apos;ll equip you with the knowledge and tools to make informed credit decisions.
                                    </Typography>
                          
                            </li>
                            <li style={{marginBlockEnd: '3vh'}}>                   
                                    <AccountBalanceRoundedIcon sx={{fontSize: '3rem', color: grey[50], marginInlineEnd: '2vw'}} />
                                    <Typography variant='p' sx={{fontSize: '1rem', fontWeight: 'bold', color: grey[50]}}>
                                        TAILORED FINANCIAL EVALUATION
                                    </Typography>
                                    <Typography variant='p' component='div' sx={{width: '100%', paddingInlineStart: '6vw'}}>
                                    We&apos;ll evaluate your unique financial situation and recommend the ideal secured credit line amount that aligns with your income, expenses, and existing debt obligations.
                                    </Typography>
                          
                            </li>
                            <li style={{marginBlockEnd: '3vh'}}>                   
                                    <AccountBalanceRoundedIcon sx={{fontSize: '3rem', color: grey[50], marginInlineEnd: '2vw'}} />
                                    <Typography variant='p' sx={{fontSize: '1rem', fontWeight: 'bold', color: grey[50]}}>
                                        LENDER NETWORK
                                    </Typography>
                                    <Typography variant='p' component='div' sx={{width: '100%', paddingInlineStart: '6vw'}}>
                                    Leverage our extensive network of trusted lenders and financial institutions to access secured credit line options that suit your needs. We&apos;ll connect you with the right partners who understand your journey to credit recovery.
                                    </Typography>
                          
                            </li>
                            <li style={{marginBlockEnd: '3vh'}}>                   
                                    <AutoFixHighRoundedIcon sx={{fontSize: '3rem', color: grey[50], marginInlineEnd: '2vw'}} />
                                    <Typography variant='p' sx={{fontSize: '1rem', fontWeight: 'bold', color: grey[50]}}>
                                        SEAMLESS APPLICATION ASSISTANCE
                                    </Typography>
                                    <Typography variant='p' component='div' sx={{width: '100%', paddingInlineStart: '6vw'}}>
                                    Our dedicated professionals will walk you through the secured credit line application process, ensuring all necessary documentation is prepared and submitted accurately and efficiently.
                                    </Typography>
                          
                            </li>
                            <li style={{marginBlockEnd: '3vh'}}>                   
                                    <AutoFixHighRoundedIcon sx={{fontSize: '3rem', color: grey[50], marginInlineEnd: '2vw'}} />
                                    <Typography variant='p' sx={{fontSize: '1rem', fontWeight: 'bold', color: grey[50]}}>
                                        CREDIT MONITORING
                                    </Typography>
                                    <Typography variant='p' component='div' sx={{width: '100%', paddingInlineStart: '6vw'}}>
                                    Stay on track with our credit monitoring services, allowing you to track your progress as your secured credit line positively impacts your credit report. We&apos;ll be there to provide ongoing support and guidance on maintaining positive credit habits.
                                    </Typography>
                          
                            </li>
                        </ul>

                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={12} sx={{}}>
                <Typography sx={{width:'100%', textAlign:'center', marginBlockEnd: '2vh'}} variant='p' component='div'>
                    Unlock the door to a brighter financial future with our secured credit line assistance. Rebuild your credit, gain confidence, and open up new opportunities 
                </Typography>
                <Box fullWidth sx={{ borderRadius:'5px', bgcolor: grey[50], marginBlockEnd: '3vh' }}>
                    <Button variant='filled' fullWidth size='lg' sx={{color: lightGreen[500], paddingBlock: '1vh'}}>
                        BOOST MY CREDIT NOW!
                    </Button>
                </Box>
            </Grid>
        </Grid>
            
  

    </Box>
  )
}

export default SecuredCreditLine