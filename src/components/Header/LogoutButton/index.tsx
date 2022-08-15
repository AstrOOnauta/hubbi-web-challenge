import { useContext } from 'react'
import { Button, Grid } from '@mui/material'

import LoginContext from '../../../shared/context/login'

export default function LogoutButton() {
  const { setLogin } = useContext(LoginContext)

  return (
    <Grid item>
      <Button
        onClick={() => setLogin({ username: '', hasLogin: false })}
        variant="text"
        color="primary"
        sx={{ fontWeight: 'bold' }}
      >
        Log Out
      </Button>
    </Grid>
  )
}
