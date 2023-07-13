import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '@/components/Layout'
import Headline from '@/components/Hero Section/Headline'
import { Box } from '@mui/material'
import Banner from '@/components/Banner'
import MarketingBox from '@/components/MarketingBox'
import { grey } from '@mui/material/colors'
import SecuredCreditLine from '@/components/SecuredCreditLine'
import CTA from '@/components/CTA/CTA'
import Testimonials from '@/components/Testimonial Section/Testimonials'
import ContactForm from '@/components/ContactForm'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Box sx={{minHeight: '100vh', width: '100%', bgcolor:grey[50]}}>
      <div>
        <Box sx={{bgcolor: grey[50], }}>
          <Headline/>
        </Box>
      </div>
      <div>
        <Box sx={{paddingInline: 0, marginBlockStart: {xs: '5vh', sm: '3vh'}}}>
        </Box>
      </div>
      <div >
        <Banner/>
      </div>
      <div>
        <MarketingBox/>
      </div>
      <div>
        <SecuredCreditLine/>
      </div>
      <div>
        <CTA/>
      </div>
      <div>
        <Testimonials />
      </div>



      </Box>      
    </Layout>


      
  )
}
