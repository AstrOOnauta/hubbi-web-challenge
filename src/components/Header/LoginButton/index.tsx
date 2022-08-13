import { Button, Grid } from '@mui/material'

export default function LoginButton() {
  return (
    <Grid item>
      <Button variant="outlined" color="primary" sx={{ fontWeight: 'bold' }}>
        Login
      </Button>
    </Grid>
  )
}
