import { Box } from '@mui/material'

export default function Background() {
  return (
    <Box
      sx={{
        position: 'fixed',
        zIndex: -1,
        backgroundImage: 'url(/background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minWidth: '100%',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        opacity: 0.4,
      }}
    />
  )
}
