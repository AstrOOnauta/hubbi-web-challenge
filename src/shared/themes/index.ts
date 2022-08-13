import { createTheme } from '@material-ui/core'
import { blueGrey, grey, indigo, red } from '@material-ui/core/colors'

export const Theme = createTheme({
  palette: {
    background: {
      default: grey[800],
      paper: grey[900],
    },
    primary: {
      main: red[800],
      dark: red[900],
      light: red[700],
      contrastText: blueGrey[50],
    },
    secondary: {
      main: indigo[800],
      dark: indigo[900],
      light: indigo[700],
      contrastText: blueGrey[50],
    },
  },
  typography: {
    body1: {
      color: blueGrey[50],
    },
    fontFamily:
      "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  },
})
