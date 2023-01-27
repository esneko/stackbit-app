import { ThemeProvider } from '@mui/material/styles'
import theme from '../utils/theme'

export default function App({ Component, pageProps }: any) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
