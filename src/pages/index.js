import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Headline from '@/components/Hero Section/Headline'
import { Box } from '@mui/material'
import Banner from '@/components/Banner'
import MarketingBox from '@/components/MarketingBox'
import { grey } from '@mui/material/colors'
import SecuredCreditLine from '@/components/SecuredCreditLine'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Box sx={{minHeight: '100vh', width: '100%', bgcolor:grey[50]}}>
        <Box sx={{bgcolor: grey[50]}}>
          <Headline/>
        </Box>
        <Box>
          <Banner/>
          <MarketingBox/>
          <SecuredCreditLine/>
        </Box>

      </Box>      
    </Layout>


      
  )
}
