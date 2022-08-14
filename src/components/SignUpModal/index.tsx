/* eslint-disable @next/next/no-img-element */

import {
  Button,
  IconButton,
  InputAdornment,
  InputBase,
  Modal,
  Typography,
} from '@mui/material'
import { Box } from '@mui/system'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import { useContext, useRef, useState } from 'react'

import OpenSignUpContext from '../../shared/context/openSignUp'
import { blueGrey, red } from '@mui/material/colors'
import OpenLoginContext from '../../shared/context/openLogin'

export default function SignUpModal() {
  const { openSignUp, setOpenSignUp } = useContext(OpenSignUpContext)
  const { openLogin, setOpenLogin } = useContext(OpenLoginContext)

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const nameInputRef = useRef<HTMLInputElement>(null)
  const emailInputRef = useRef<HTMLInputElement>(null)
  const usernameInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null)

  const handleClose = () => setOpenSignUp(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (
      nameInputRef.current &&
      emailInputRef.current &&
      usernameInputRef.current &&
      passwordInputRef.current &&
      confirmPasswordInputRef.current
    ) {
      console.log(usernameInputRef.current.value)
      console.log(passwordInputRef.current.value)
    }
  }

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  return (
    <Modal
      open={openSignUp}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          maxWidth: 400,
          bgcolor: 'background.paper',
          border: '2px solid rgba( 198, 40, 40, 0.2 )',
          borderRadius: '8px',
          boxShadow: 24,
          p: 4,
        }}
      >
        <img
          style={{ width: '220px' }}
          src="/logo.png"
          alt="Logo Star Wars"
          loading="lazy"
        />
        <Typography
          variant="h6"
          component="h2"
          sx={{
            color: red[600],
            fontWeight: 'bold',
            margin: '2rem 0 1rem 0',
          }}
        >
          SIGN UP
        </Typography>
        <Box component="form" onSubmit={onSubmit}>
          <InputBase
            required
            sx={{
              width: '100%',
              marginBottom: '1rem',
              color: blueGrey[50],
              borderBottom: '2px solid #FFFFFF',
            }}
            placeholder="Name"
            type="text"
            name="username"
            inputRef={nameInputRef}
          />
          <InputBase
            required
            sx={{
              width: '100%',
              marginBottom: '1rem',
              color: blueGrey[50],
              borderBottom: '2px solid #FFFFFF',
            }}
            placeholder="Email"
            type="text"
            name="username"
            inputRef={emailInputRef}
          />
          <InputBase
            required
            sx={{
              width: '100%',
              marginBottom: '1rem',
              color: blueGrey[50],
              borderBottom: '2px solid #FFFFFF',
            }}
            placeholder="Username"
            type="text"
            name="username"
            inputRef={usernameInputRef}
          />
          <InputBase
            required
            sx={{
              width: '100%',
              marginBottom: '2rem',
              color: blueGrey[50],
              borderBottom: '2px solid #FFFFFF',
            }}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            inputRef={passwordInputRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{ color: blueGrey[50], marginRight: '-0.4rem' }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <InputBase
            required
            sx={{
              width: '100%',
              marginBottom: '2rem',
              color: blueGrey[50],
              borderBottom: '2px solid #FFFFFF',
            }}
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm password"
            inputRef={confirmPasswordInputRef}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  sx={{ color: blueGrey[50], marginRight: '-0.4rem' }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button
            type="submit"
            sx={{
              width: '100%',
            }}
            variant="contained"
          >
            Sign Up
          </Button>
        </Box>
        <Button
          sx={{ marginTop: '1rem' }}
          onClick={() => {
            setOpenSignUp(false)
            setOpenLogin(true)
          }}
        >
          I Have an Account
        </Button>
      </Box>
    </Modal>
  )
}
