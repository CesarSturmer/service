import styled from 'styled-components'

export const ContainerFilter = styled.div`
  width: 80%;
  height: 70px;
  position: relative;
  top: -6rem;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  @media (min-width: 560px) and (max-width: 767px) {
    width: 90%;
    margin: 0 2rem;
  }
  @media (max-width: 560px) {
    width: 95%;
    margin: 0 auto;
    flex-direction: column;
    height: auto;
  }
`