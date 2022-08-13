import { Box, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
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
  },
})

export default function Background() {
  const classes = useStyles()

  return <Box className={classes.root} />
}
