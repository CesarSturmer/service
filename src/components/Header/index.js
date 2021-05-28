import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoPersonCircleOutline} from 'react-icons/io5'
import ModalLogin from '../ModalLogin';
import ModalServices from '../ModalServices';

const HeaderContainer = styled.div`
  margin: 0 6.25rem; 

  @media (min-width: 1025px) and (max-width: 1300px) {
    margin: 0 3.125rem ;
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

  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
  }
`;

const ContainerIconLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;

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
  border-radius: 18px;

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


const Header = () => {

const [openIconLogin, setOpenIconLogin] = useState(false)
const [openIconService, setOpenIconService] = useState(false)

const handleLogin = () => {
  if(!openIconLogin){
    setOpenIconLogin(true)
  } else{
    setOpenIconLogin(false)
  } 
}
const handleServices = () => {
  if(!openIconService){
    setOpenIconService(true)
  } else{
    setOpenIconService(false)
  } 
}





  return (
    <HeaderContainer>
      <ContainerMenu>
        <GiHamburgerMenu size={60} color={'#ffffff'} onClick={handleServices}/>
        {
          openIconService 
          ? 
            <ModalServices />
          : ''
        }
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
  
          <ButtonsContainer>
            <Link href="/userForm">
              <SignUpButton>Cadastrar</SignUpButton>
            </Link>
            <Link href="/login">
              <LoginButton>Entrar</LoginButton>
            </Link>
          </ButtonsContainer>

      </Container>
      <ContainerIconLogin>
        <IoPersonCircleOutline size={60} color={'#ffffff'} onClick={handleLogin}/>

        {
          openIconLogin 
          ? 
          <ModalLogin />
          : ''
        }

      </ContainerIconLogin>
    </HeaderContainer>
  );
};

export default Header;
