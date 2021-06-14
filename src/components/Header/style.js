import styled from 'styled-components'

export const HeaderContainer = styled.div`
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
`

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  @media (min-width: 320px) and (max-width: 767px) {
    width: auto;
  }
`

export const ContainerOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const ContainerMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
  }
`

export const ContainerIconLogin = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  display: none;
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;

  @media (min-width: 320px) and (max-width: 767px) {
    display: flex;
  }
`

export const Title = styled.h1`
  font-size: 3.125rem;
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 3rem;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 2.5rem;
  }
`

export const Subtitle = styled.h1`
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
`

export const ButtonsContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  border-radius: 18px;

  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

export const ButtonsContainerInfo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0.938rem;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    display: none;
  }
`

export const SignUpButton = styled.a`
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
`

export const LoginButton = styled.button`
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
`

export const UserName = styled.button`
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
`

export const UserPhoto = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 45px;
    height: 45px;
  }
`