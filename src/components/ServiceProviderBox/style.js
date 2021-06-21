import styled from 'styled-components'

export const UserInfoContainer = styled.div`
  position: relative;
  top: -3rem;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (min-width: 479px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 479px) {
    align-items: flex-start;
    flex-direction: column;
    width: auto;
    padding-left: 0.625rem;
  }
`

export const DataContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 479px) and (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    align-items: flex-start;
  }
`

export const WppContainer = styled.div`
  align-self: center;
  color: ${({ theme }) => theme.colors.title};
  
`