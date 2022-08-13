import { Grid, Typography } from '@mui/material'

export default function Characters() {
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
      <Grid item>
        <Typography>Characters</Typography>
      </Grid>
    </Grid>
  )
}
