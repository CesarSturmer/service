import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: no-repeat url('/background.svg') ;
    background-size: cover;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
    title: '#FFFFFF',
    secondary: '#fefefe',
    backgroundWhite: '#FFFFFF',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
