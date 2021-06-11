import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

`

export const ContainerIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 3.5rem;
`

export const Subtitle = styled.h1`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.title};
  padding: 2.688rem;
  cursor: pointer;
`