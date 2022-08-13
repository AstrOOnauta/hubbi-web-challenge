import { Grid, Typography } from '@mui/material'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
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
        <Grid item>
          <Typography>Hello World!</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
