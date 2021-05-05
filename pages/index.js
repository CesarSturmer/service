import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ContainerButtons = styled.div`
  display: flex;
  margin-left: 160px;
`;

const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 211px;
  margin-left: 160px;
`;

const Title = styled.h1`
  font-size: 72px;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: bold;
`;

const Subtitle = styled.h3`
  font-size: 24px;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: normal;
`;

const ContentImg = styled.div`
  margin-right: 120px;
  margin-top: 118px;
`;

const ButtonSearch = styled.button`
  width: 287.32px;
  height: 101.46px;
  background: rgba(184, 233, 244, 0.47);
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ButtonService = styled.button`
  width: 287.32px;
  height: 101.46px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.colorButtonService};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-left: 11px;
`;

const ButtonTextSearch = styled.p`
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 33px;
  white-space: nowrap;
  margin: 36px 35px 35px 0px;
  color: ${({ theme }) => theme.colors.title};
`;

const DivImage = styled.div`
  margin: 38px 18px 34px 30px;
`;

export default function Landing() {
  return (
    <main>
      <>
        <Container>
          <ContainerText>
            <Title>Serviço</Title>
            <Subtitle>
              Procurando alguém na sua região? <br />
              Buscando alguém bem recomendado?
            </Subtitle>
          </ContainerText>

          <Container>
            <ContentImg>
              <img src="./Concerto__home.svg" alt="Figura de trabalhadores" />
            </ContentImg>
          </Container>
        </Container>

        <ContainerButtons>
          <Link href="/search">
            <ButtonSearch>
              <DivImage>
                <img src="./Search.svg" alt="Busca por serviço" />
              </DivImage>
              <ButtonTextSearch>Buscar Serviço</ButtonTextSearch>
            </ButtonSearch> 
          </Link>
          <Link href="/">
            <ButtonService>
              <DivImage>
                <img src="./Group.svg" alt="Busca por serviço" />
              </DivImage>
              <ButtonTextSearch>Prestar Serviço</ButtonTextSearch>
            </ButtonService>
          </Link>
        </ContainerButtons>
      </>
    </main>
  );
}
