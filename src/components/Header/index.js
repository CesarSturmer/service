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

const ButtonsContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 18px;
`

const SignUpButton = styled.a`
  width: 279px;
  height: 40px;
  margin-right: 1rem;
  padding: 1rem;
`;

const LoginButton = styled.button`
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
              <ButtonsContainer>
                <Link href="/userForm">
                <SignUpButton>Cadastrar</SignUpButton>
                </Link>
                <Link href="/login">
                <LoginButton>Entrar</LoginButton>
                </Link>
              </ButtonsContainer>
            </Container>
            </Container>
        </HeaderContainer>
    )
}

export default Header