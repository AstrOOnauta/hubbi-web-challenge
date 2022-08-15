import { createTheme } from '@mui/material'
import { blueGrey, grey, red } from '@mui/material/colors'

export const Theme = createTheme({
  palette: {
    background: {
      default: grey[800],
      paper: grey[900],
    },
    primary: {
      main: red[500],
      dark: red[600],
      light: red[400],
      contrastText: blueGrey[50],
    },
    secondary: {
      main: blueGrey[100],
      dark: blueGrey[200],
      light: blueGrey[50],
      contrastText: grey[900],
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
