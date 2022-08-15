import { Button, Grid, IconButton, Paper, Typography } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import InstagramIcon from '@mui/icons-material/Instagram'
import { blueGrey } from '@mui/material/colors'

export default function Footer() {
  return (
    <Paper
      sx={{
        padding: '1rem',
        width: '100%',
        minHeight: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1,
        marginTop: '2rem',
      }}
    >
      <Typography
        style={{
          fontWeight: 'bold',
        }}
      >
        Star Wars
      </Typography>
      <Grid
        container
        direction="row"
        style={{
          margin: '1rem 0',
          width: '10rem',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <IconButton sx={{ color: blueGrey[50] }}>
          <TwitterIcon />
        </IconButton>
        <IconButton sx={{ color: blueGrey[50] }}>
          <FacebookIcon />
        </IconButton>
        <IconButton sx={{ color: blueGrey[50] }}>
          <YouTubeIcon />
        </IconButton>
        <IconButton sx={{ color: blueGrey[50] }}>
          <InstagramIcon />
        </IconButton>
      </Grid>
      <Grid item>
        <Typography>2022 &copy; All Rights Reserved</Typography>
      </Grid>
    </Paper>
  )
}
