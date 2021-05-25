import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import FormValidations from '../src/contexts/FormValidations';
import {
  passwordValidator,
  cpfValidator,
  phoneValidator,
} from '../src/models/Form';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background: no-repeat url('/background-servicos.png');
    background-size: cover !important;
    font-family: 'Open Sans', sans-serif;    
  }
  
  a, button {
    cursor: pointer;
    border: none;
    text-decoration: none;
  }
`;

const theme = {
  colors: {
    primary: '#0070f3',
    title: '#FFFFFF',
    secondary: '#22AAC1',
    backgroundWhite: '#FFFFFF',

  },
  borderRadius: {
    default: '8px',
    max: '50%',
  }
};



export default function App({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Service</title>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap"
        rel="stylesheet"
      />
    </Head>

      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <FormValidations.Provider
          value={{
            password: passwordValidator,
            cpf: cpfValidator,
            phone: phoneValidator,
          }}
        >
          <Component {...pageProps} />
        </FormValidations.Provider>
      </ThemeProvider>
    </>
  );
}
