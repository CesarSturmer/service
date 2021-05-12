import styled from 'styled-components';
import LandingButton from '../src/components/LandingButton';
import TexContainer from '../src/components/TexContainer';

const PageContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const ContainerButtons = styled.div`
  display: flex;
`;

export default function Landing() {
  return (
    <PageContainer>
      <Left>
        <TexContainer
          title={'Serviço'}
          subtitle={'Procurando alguém na sua região?'}
          secondTitle={'Buscando alguém bem recomendado?'}
        />

        <ContainerButtons>
          <LandingButton
            imageSrc="./Search.svg"
            text="Buscar Serviço"
            to="/search"
          />
          <LandingButton
            imageSrc="./Group.svg"
            text="Prestar Serviço"
            to="/"
            serviceButton
          />
        </ContainerButtons>
      </Left>
      <img src="./Concerto__home.svg" alt="Figura de trabalhadores" />
    </PageContainer>
  );
}
