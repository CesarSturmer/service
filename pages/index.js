import { createGlobalStyle } from 'styled-components'
import {PageContainer, Left, ContainerButtons, ContainerImg} from '../styles/landing'
import LandingButton from '@components/LandingButton'
import TexContainer from '@components/Utils/TexContainer'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    
    @media (max-width: 767px) and (max-height: 700px) {
      height: auto;   
    }
  }
`

export default function Landing() {
  return (
    <>
      <GlobalStyle />
      <PageContainer>
        <Left>
          <TexContainer
            title={'Service'}
            subtitle={'Procurando alguém na sua região?'}
            secondTitle={'Buscando alguém bem recomendado?'}
            fontSizeTitle
          />

          <ContainerButtons>
            <LandingButton
              imageSrc="./Search.svg"
              text="Buscar Serviço"
              to="/serviceSearch"
            />
            <LandingButton
              imageSrc="./Group.svg"
              text="Prestar Serviço"
              to="/userForm"
              serviceButton
            />
          </ContainerButtons>
        </Left>
        <ContainerImg>
          <img src="./Concerto__home.svg" alt="Figura de trabalhadores" />
        </ContainerImg>
      </PageContainer>
    </>
  )
}
