/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { Box, Button, Drawer, Grid, Paper, useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useRouter } from 'next/router'

import LoginButton from './LoginButton'
import SignUpButton from './SignUpButton'
import NextLink from 'next/link'
import { OpenLoginContextProvider } from '../../shared/context/openLogin'
import LoginModal from '../LoginModal'
import SignUpModal from '../SignUpModal'
import { OpenSignUpContextProvider } from '../../shared/context/openSignUp'
import { UsersContextProvider } from '../../shared/context/users'

const NAV_BAR = [
  {
    title: 'HOME',
    path: '/',
  },
  {
    title: 'CHARACTERS',
    path: '/characters',
  },
  {
    title: 'STARSHIPS',
    path: '/starships',
  },
]

export default function Header() {
  const [openDrawer, setOpenDrawer] = useState(false)

  const mobile = useMediaQuery('(max-width:720px)')
  const tablet = useMediaQuery('(max-width:1279px)')

  const router = useRouter()

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpenDrawer(newOpen)
  }

  return (
    <UsersContextProvider>
      <OpenLoginContextProvider>
        <OpenSignUpContextProvider>
          <Paper
            sx={{
              position: 'fixed',
              width: '100%',
              minHeight: '80px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba( 0, 0, 0, 0.6 )',
              boxShadow: '0 0 32px 8px rgba( 0, 0, 0, 0.37 )',
              borderBottom: '2px solid rgba( 198, 40, 40, 0.5 )',
            }}
          >
            <img
              style={
                mobile
                  ? { width: '160px' }
                  : tablet
                  ? { width: '160px', marginLeft: '2rem' }
                  : { width: '160px', marginLeft: '15rem' }
              }
              src="/logo.png"
              alt="Logo Star Wars"
              loading="lazy"
            />
            {tablet ? (
              <Box sx={{ marginRight: '1rem' }}>
                <MenuIcon onClick={toggleDrawer(true)} color="primary" />
                <Drawer
                  anchor="right"
                  open={openDrawer}
                  onClose={toggleDrawer(false)}
                >
                  <Box
                    sx={{
                      width: mobile ? '15rem' : '20rem',
                      height: '100%',
                      padding: '5rem 1rem',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                    }}
                  >
                    <CloseIcon
                      sx={{
                        position: 'absolute',
                        top: '1rem',
                        right: '1rem',
                      }}
                      color="primary"
                      onClick={toggleDrawer(false)}
                    />
                    <Grid
                      container
                      spacing={3}
                      direction="column"
                      alignItems="center"
                    >
                      {NAV_BAR.map((item, index) => {
                        return (
                          <Grid
                            item
                            key={index}
                            sx={{
                              width: '100%',
                            }}
                          >
                            <NextLink passHref href={item.path}>
                              <Button
                                color={
                                  router.pathname === item.path
                                    ? 'primary'
                                    : 'secondary'
                                }
                                sx={{
                                  fontWeight: 'bold',
                                  width: '100%',
                                }}
                                onClick={() => setOpenDrawer(false)}
                              >
                                {item.title}
                              </Button>
                            </NextLink>
                          </Grid>
                        )
                      })}
                      <LoginButton setOpenDrawer={setOpenDrawer} />
                      <SignUpButton setOpenDrawer={setOpenDrawer} />
                    </Grid>
                  </Box>
                </Drawer>
              </Box>
            ) : (
              <>
                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  sx={{ marginRight: '2rem' }}
                >
                  {NAV_BAR.map((item, index) => {
                    return (
                      <Grid item key={index}>
                        <NextLink passHref href={item.path}>
                          <Button
                            color={
                              router.pathname === item.path
                                ? 'primary'
                                : 'secondary'
                            }
                            sx={{
                              fontWeight: 'bold',
                              borderBottom:
                                router.pathname === item.path
                                  ? '1px solid'
                                  : '',
                              borderRadius: 0,
                            }}
                          >
                            {item.title}
                          </Button>
                        </NextLink>
                      </Grid>
                    )
                  })}
                </Grid>

                <Grid
                  container
                  spacing={2}
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  sx={{ marginRight: '2rem' }}
                >
                  <LoginButton setOpenDrawer={setOpenDrawer} />
                  <SignUpButton setOpenDrawer={setOpenDrawer} />
                </Grid>
              </>
            )}
          </Paper>
          <LoginModal />
          <SignUpModal />
        </OpenSignUpContextProvider>
      </OpenLoginContextProvider>
    </UsersContextProvider>
  )
}
