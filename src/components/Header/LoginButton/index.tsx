import { Dispatch, SetStateAction, useContext } from 'react'

import { Button, Grid } from '@mui/material'

import OpenLoginContext from '../../../shared/context/openLogin'

interface LoginButtonProps {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>
}

export default function LoginButton(props: LoginButtonProps) {
  const { openLogin, setOpenLogin } = useContext(OpenLoginContext)

  const handleOpen = () => setOpenLogin(true)

  return (
    <Grid item>
      <Button
        onClick={() => {
          handleOpen()
          props.setOpenDrawer(false)
        }}
        variant={openLogin ? 'contained' : 'outlined'}
        color="primary"
        sx={{ fontWeight: 'bold' }}
      >
        Login
      </Button>
    </Grid>
  )
}
