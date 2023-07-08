import { Typography } from '@mui/material'
import React from 'react'



export const bannerData = ['Improve your credit score fast!', 'Turn back and clock and start fresh!', 'Easy simple process!']

const Banner = () => {
  return (
  <div className='maylike-products-wrapper track' style={{}}>
  <div className='marquee'>
      <div className='maylike-products-container'>
          {bannerData.map((c, i) => (
              <Typography key={i} variant='h5' component='div' sx={{}}>
                {c}
              </Typography>
          ))}
      </div>
  </div>
</div>
  )
}

export default Banner