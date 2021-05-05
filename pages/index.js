import styled from 'styled-components';
import LandingButton from '../src/components/LandingButton'

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
`

const ContainerButtons = styled.div`
  display: flex;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: bold;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: normal;
  margin: 0;
`;





export default function Landing() {
  return (
    <PageContainer>
      <Left>
        <Title>Serviço</Title>
        <Subtitle>Procurando alguém na sua região?</Subtitle>
        <Subtitle>Buscando alguém bem recomendado?</Subtitle>
        <ContainerButtons>
            <LandingButton 
              imageSrc='./Search.svg' 
              text='Buscar Serviço' 
              to='/search'
            />
            <LandingButton 
              imageSrc='./Group.svg' 
              text='Prestar Serviço' 
              to='/'
              serviceButton
            />
        </ContainerButtons>
      </Left>
      <img src="./Concerto__home.svg" alt="Figura de trabalhadores" />
    </PageContainer>
  );
}
