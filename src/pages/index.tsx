import type { NextPage } from 'next'
import { Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({
  root: {
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

const Home: NextPage = () => {
  const classes = useStyles()

  return (
    <>
      <Grid
        container
        className={classes.root}
        spacing={0}
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Typography>Hello World!</Typography>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
