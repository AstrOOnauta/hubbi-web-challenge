/* eslint-disable @next/next/no-img-element */
import { Grid, useMediaQuery } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import CardsSection from '../components/CardsSection'

import { Carousel } from '../components/Carousel'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  const mobile = useMediaQuery('(max-width:720px)')
  const tablet = useMediaQuery('(max-width:1279px)')

  return (
    <Grid
      container
      sx={{
        width: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
      spacing={0}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        sx={{
          width: '100%',
          height: mobile ? '30vh' : tablet ? '50vh' : '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 0,
          background: grey[900],
          marginTop: tablet ? '110px' : '',
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Carousel />
      </Box>
      <CardsSection />
      <Footer />
    </Grid>
  )
}

export default Home
