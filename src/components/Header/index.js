import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../../pages/api';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoPersonCircleOutline, IoPersonCircle } from 'react-icons/io5';
import ModalLogin from '../ModalLogin';
import ModalServices from '../ModalServices';
import { useRouter } from 'next/router';

const HeaderContainer = styled.div`
  margin: 0 6.25rem;

  @media (min-width: 1025px) and (max-width: 1300px) {
    margin: 0 3.125rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 0 1.25rem;
    display: flex;
    justify-content: space-around;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    margin: 0 2rem;
    display: flex;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;
const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
  }
`;

const ContainerIconLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
  }
`;

const Title = styled.h1`
  font-size: 3.125rem;
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled.h1`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.title};
  padding: 2.688rem;
  cursor: pointer;

  @media (min-width: 1025px) and (max-width: 1100px) {
    padding: 1.875rem;
  }
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0.938rem;
    font-size: 1rem;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

const ButtonsContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 1.25rem;

  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;
const ButtonsContainerInfo = styled.div`
  display: flex;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0.938rem;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`;

const SignUpButton = styled.a`
  width: 17.438rem;
  height: 2.5rem;
  margin-right: 1rem;
  padding: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.title};
  font-weight: bold;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0.938rem;
    font-size: 1rem;
    width: 8.75rem;
    margin-right: 0;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 0.938rem;
    font-size: 1rem;
    width: 8.75rem;
    margin-right: 0;
  }
`;

const LoginButton = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 18px;
  width: 140px;
  height: 2.5rem;
  font-weight: bold;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0.938rem;
    font-size: 1rem;
    width: 100px;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 0.938rem;
    font-size: 1rem;
    width: 100px;
  }
`;

const UserName = styled.button`
  background: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 12px;
  width: 140px;
  height: 2.5rem;
  font-weight: bold;
  position: relative;
  left: 15px;
  z-index: -9999;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0.938rem;
    font-size: 0.875rem;
  }
`;

const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 45px;
    height: 45px;
  }
`;
const UserAction = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;
const Header = () => {
  const router = useRouter();
  const [openIconLogin, setOpenIconLogin] = useState(false);
  const [openIconService, setOpenIconService] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [open, setOpen] = useState(false);

  const handleLogin = () => setOpenIconLogin(!openIconLogin);

  const handleServices = () => setOpenIconService(!openIconService);

  if (typeof window !== 'undefined') {
    const token = sessionStorage.getItem('validated_token');
    api.defaults.headers.common['Authorization'] = 'Bearer ' + token;
  }

  useEffect(() => {
    const getUserInfo = async () => {
      await api
        .get('usuario')
        .then((res) => {
          setUserInfo(res.data);
        })
        .catch(() => console.log('usuário não logado'));
    };
    getUserInfo();
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem('validated_token');
    router.push('/');
  };

  return (
    <HeaderContainer>
      <ContainerMenu onClick={handleServices}>
        <GiHamburgerMenu size={60} />
        {openIconService && <ModalServices />}
      </ContainerMenu>
      <Container>
        <Link href="/">
          <div>
            <Title>Serviço</Title>
          </div>
        </Link>
        <ContainerOptions>
          <Link href="/serviceSearch">
            <Subtitle>Serviços</Subtitle>
          </Link>
          <Subtitle>Seu Local</Subtitle>
          <Subtitle>Sobre nós</Subtitle>
        </ContainerOptions>

        {userInfo.length !== 0 ? (
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <ButtonsContainerInfo onClick={() => setOpen(!open)}>
              <UserName>{userInfo.nomeCompleto}</UserName>
              {userInfo.midiaPath ? (
                <UserPhoto
                  src={`https://servicos-app.herokuapp.com/${userInfo.midiaPath}`}
                />
              ) : (
                <IoPersonCircle
                  color={'white'}
                  size={63}
                  style={{ position: 'relative', zIndex: 1, right: 5 }}
                />
              )}
            </ButtonsContainerInfo>
            {open && (
              <UserAction>
                <a href="/user">Minha conta</a>
                <a href="" onClick={handleLogout}>
                  Sair
                </a>
              </UserAction>
            )}
          </div>
        ) : (
          <ButtonsContainer>
            <Link href="/userForm">
              <SignUpButton>Cadastrar</SignUpButton>
            </Link>
            <Link href="/login">
              <LoginButton>Entrar</LoginButton>
            </Link>
          </ButtonsContainer>
        )}
      </Container>
      <ContainerIconLogin onClick={handleLogin}>
        <IoPersonCircleOutline size={60} />
        {openIconLogin && (
          <ModalLogin userInfo={userInfo} handleLogout={handleLogout} />
        )}
      </ContainerIconLogin>
    </HeaderContainer>
  );
};

export default Header;
