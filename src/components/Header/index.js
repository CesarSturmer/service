import Link from 'next/link';
import styled from 'styled-components'

const HeaderContainer = styled.div`
  margin: 0px 100px 0 100px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.title};
`;

const TitleSecond = styled.h1`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.title};
  padding: 43px;
`;

const ButtonRegister = styled.button`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 18px;
  width: 279px;
  height: 40px;
`;

const ButtonEnter = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 18px;
  width: 140px;
  height: 40px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Container>
            <div>
                <Title>Serviço</Title>
            </div>
            <Container>
                <TitleSecond>Serivços</TitleSecond>
                <TitleSecond>Seu Local</TitleSecond>
                <TitleSecond>Sobre nós</TitleSecond>
            </Container>
            <Container>
                <Link href="/userForm">
                <ButtonRegister>Cadastrar</ButtonRegister>
                </Link>
                <Link href="/login">
                <ButtonEnter>Entrar</ButtonEnter>
                </Link>
            </Container>
            </Container>
        </HeaderContainer>
    )
}

export default Header