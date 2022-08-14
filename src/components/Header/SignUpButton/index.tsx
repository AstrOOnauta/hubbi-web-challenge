import { Dispatch, SetStateAction, useContext } from 'react'

import { Button, Grid } from '@mui/material'

import OpenSignUpContext from '../../../shared/context/openSignUp'

interface SignUpButtonProps {
  setOpenDrawer: Dispatch<SetStateAction<boolean>>
}

export default function SignUpButton(props: SignUpButtonProps) {
  const { openSignUp, setOpenSignUp } = useContext(OpenSignUpContext)

  const handleOpen = () => setOpenSignUp(true)

  return (
    <Grid item>
      <Button
        onClick={() => {
          handleOpen()
          props.setOpenDrawer(false)
        }}
        variant={openSignUp ? 'contained' : 'outlined'}
        color="primary"
        sx={{ fontWeight: 'bold' }}
      >
        SignUp
      </Button>
    </Grid>
  )
}
