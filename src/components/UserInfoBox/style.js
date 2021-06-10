import styled from 'styled-components'

export const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`

export const DataContainer = styled.div`
  max-width: 15rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-left: 5rem;
`

export const Text = styled.p`
  margin: 1rem 0;
`

export const ButtonsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
`

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  border: 1px solid ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  padding: 0.5rem 2rem;
`