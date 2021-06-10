import styled from 'styled-components'

export const Form = styled.form`
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  padding: 2rem;
  width: 30rem;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.default};

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 20rem;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    width: 18.75rem;
  }
  @media (max-width: 479px) {
    width: 14.625rem;
    padding: 1.5rem;
  }

`

export const BackContainer = styled.div`
  color: ${({ theme }) => theme.colors.secondary};
  position: relative;
  left: -50%;
  cursor: pointer;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 15rem;
  text-align: center;

  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 1.75rem;
  }
  @media (max-width: 479px) {
    font-size: 1.75rem;
  }
`

export const Container = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.secondary};
  align-items: center;
  font-size: 0.9rem;

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 0.75rem;
  }
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 0.75rem;
  }
`

export const LinkText = styled.a`
  text-decoration: underline;
`