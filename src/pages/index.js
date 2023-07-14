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
import { motion } from "framer-motion"

const inter = Inter({ subsets: ['latin'] })
export default function Home() {
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}
  return (
    <Layout>
      <Box sx={{minHeight: '100vh', width: '100%', bgcolor:grey[50]}}>
      <section id='Home'>
        <Box sx={{bgcolor: grey[50], }}>
          <Headline/>
        </Box>
      </section>
      <section id=''>
        <Box sx={{paddingInline: 0, marginBlockStart: {xs: '5vh', sm: '3vh'}}}>
        </Box>
      </section>
      <section id=''>
        <Banner/>
      </section>
      <section id='Credit Repair'>
        <MarketingBox/>
      </section>
      <section id='Credit Booster'>
        <SecuredCreditLine/>
      </section>
      <section id='Pricing'>
        <CTA/>
      </section>
      <section id='Our Clients'>
        <Testimonials />
      </section>



      </Box>      
    </Layout>


      
  )
}
