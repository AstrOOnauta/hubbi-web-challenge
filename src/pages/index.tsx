import { Grid, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import { Box } from '@mui/system'
import type { NextPage } from 'next'
import { Carousel } from '../components/Carousel'

const Home: NextPage = () => {
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
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          zIndex: 0,
          background: grey[900],
        }}
        alignItems="center"
        justifyContent="center"
      >
        <Carousel />
      </Box>
    </Grid>
  )
}

export default Home
