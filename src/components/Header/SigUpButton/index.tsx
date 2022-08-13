import { Button, Grid } from '@mui/material'

export default function SignUpButton() {
  return (
    <Grid item>
      <Button variant="outlined" color="primary" sx={{ fontWeight: 'bold' }}>
        Sign Up
      </Button>
    </Grid>
  )
}
