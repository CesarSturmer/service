import { createGlobalStyle, ThemeProvider } from 'styled-components'
import FormValidations from '../src/contexts/FormValidations'
import {passwordValidator} from '../src/models/Form'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: no-repeat url('/background.svg');
    background-size: cover;
  }

  input {
    background-color: #fefefe !important;
    border-radius: 8px;
  }
  
  a, button {
    cursor: pointer;
    border: none;
    text-decoration: none;
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
        <FormValidations.Provider value={{password: passwordValidator}}>
          <Component {...pageProps} />
        </FormValidations.Provider>
      </ThemeProvider>
    </>
  )
}
