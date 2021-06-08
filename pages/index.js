import styled, {createGlobalStyle} from 'styled-components';
import LandingButton from '../src/components/LandingButton';
import TexContainer from '../src/components/Utils/TexContainer';

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
  }
`;

const PageContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 1.25rem;  
  } 
  @media (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
    margin-top: 1.25rem;   
  }
  @media (max-width: 479px) {
    flex-direction: column;
    margin-top: 1.25rem;
  } 
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    align-items: center;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    align-items: center;
  }
`;

const ContainerButtons = styled.div`
  display: flex;

  @media (min-width: 1025px) and (max-width: 1100px) {
    padding-left: 2.5rem;
  }
  @media (min-width: 768px) and (max-width: 1025px) {
    padding-left: 2.5rem;
  }
  @media (min-width: 479px) and (max-width: 767px) {
    margin-top: 3rem;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`;

const ContainerImg = styled.div`
  @media (min-width: 320px) and (max-width: 479px) {
    > img {
      height: 370px;
      margin: 0 2rem 0 0;
    }
  }
`;

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
            to="/"
            serviceButton
          />
        </ContainerButtons>
      </Left>
      <ContainerImg>
        <img src="./Concerto__home.svg" alt="Figura de trabalhadores" />
      </ContainerImg>
    </PageContainer>
    </>
  );
}
