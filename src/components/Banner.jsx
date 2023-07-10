import { Typography } from '@mui/material'
import React from 'react'



export const bannerData = ['Improve your credit score fast! ', ' 📈 ', 'Turn back and clock and start fresh! ', ' ⏰ ', 'Easy simple process!', ' 😊 ']

const Banner = () => {
  return (
      <div>
              <marquee  >{bannerData.map((b, i) => {
                return b
              })}</marquee>
      </div>
  )
}

export default Banner