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
import GppGoodIcon from '@mui/icons-material/GppGood'
import PersonIcon from '@mui/icons-material/Person'
import { useContext, useRef, useState } from 'react'

import OpenLoginContext from '../../shared/context/openLogin'
import { blueGrey, red } from '@mui/material/colors'

export default function LoginModal() {
  const { openLogin, setOpenLogin } = useContext(OpenLoginContext)

  const [showPassword, setShowPassword] = useState<boolean>(false)

  const userInputRef = useRef<HTMLInputElement>(null)
  const passwordInputRef = useRef<HTMLInputElement>(null)

  const handleClose = () => setOpenLogin(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (userInputRef.current && passwordInputRef.current) {
      console.log(userInputRef.current.value)
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
      open={openLogin}
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
          SIGN IN
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
            placeholder="Username or Email"
            type="text"
            name="username"
            inputRef={userInputRef}
            startAdornment={
              <InputAdornment position="start" sx={{ color: blueGrey[50] }}>
                <PersonIcon />
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
            startAdornment={
              <InputAdornment position="start" sx={{ color: blueGrey[50] }}>
                <GppGoodIcon />
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
            Sign In
          </Button>
        </Box>
        <Box
          sx={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}
          justifyContent="flex-end"
        >
          <Button
            sx={{
              fontSize: '.6rem',
            }}
          >
            Forgot your password?
          </Button>
        </Box>
        <Button sx={{ marginTop: '1rem' }}>Create an Account</Button>
      </Box>
    </Modal>
  )
}