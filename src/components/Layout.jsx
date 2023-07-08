import React, { useEffect } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({children}) => {

  return (
    <>
    <div className='layout' style={{minHeight: '100vh', }}>
      <Head>
        <title>Credit Guru</title>
      </Head>
      <header>
      <Navbar />
        
      </header>
      <main  className={`flex min-h-screen flex-col items-center justify-between  ${inter.className}`}>
        {children}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>      
    </>

  )
}

export default Layout