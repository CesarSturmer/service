import styled from 'styled-components'

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  @media (min-width: 479px) and (max-width: 767px) {
    flex-direction: column;
    justify-content: safe;
    align-items: end;
  }
  @media (max-width: 479px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    
  }
`

export const DataContainer = styled.div`
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 5rem;

  @media (min-width: 479px) and (max-width: 767px) {
    margin-left: 3rem;
  }
  @media (max-width: 479px) {
    margin-left: 1rem;
  }
`

export const Text = styled.p`
  margin: 1rem 0;
`

export const ButtonsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  @media (min-width: 479px) and (max-width: 767px) {
    padding: 1.5rem;
  }
  @media (max-width: 479px) {
    padding: 1rem;
  }
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  border: 1px solid ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0.5rem 2rem;

  @media (min-width: 479px) and (max-width: 767px) {
    padding: 0.5rem 1.5rem;
  }
  @media  (max-width: 479px) {
    padding: 0.2rem 0.5rem;
  }
  @media (max-width: 370px) {
    padding: 0.125rem 0.125rem;
  }
`