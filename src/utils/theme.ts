import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1F2B9D'
    },
    secondary: {
      main: '#F65458'
    },
    text: {
      primary: '#02001d',
      secondary: '#374151'
    }
  },
  typography: {
    h1: {
      fontWeight: 500
    },
    h2: {
      fontWeight: 500
    },
    h3: {
      fontWeight: 500
    }
  }
})

theme = responsiveFontSizes(theme)

export default theme
