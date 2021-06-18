import styled from 'styled-components'

export const Container = styled.div`
  width: 50rem;
  color: ${({ theme }) => theme.colors.title};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 35rem;
  }
  @media (min-width: 479px) and (max-width: 767px) {
    width: 70%;
  }
  @media (max-width: 479px) {
    width: 70%;
  }
`

export const Title = styled.h1`
  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 1.5rem;
  }
`

export const AvaliationBox = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem 0;
`

export const AvaliationContainer = styled.div`
  width: 90%;

  @media (max-width: 479px) {
    display: flex;
    flex-direction: column;
  }
`

export const AvaliatorName = styled.p`
  position: relative;
  bottom: -3.5rem;
  align-self: flex-start;
  font-size: 0.5rem;

  @media (max-width: 479px) {
    position: revert;
  }
`

export const Avaliation = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.title};

  @media (max-width: 479px) {
    justify-content: space-between;
    font-size: 0.875rem;
  }
`
export const TextAvaliation = styled.p`
  @media (max-width: 479px) {
    font-size: 0.875rem;
    margin-bottom: auto;
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0.5rem 2rem;
  margin-top: 1rem;
  align-self: flex-end;

  @media (max-width: 479px) {
    padding: 0.3rem 0.5rem;
  }
`
