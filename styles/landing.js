import styled from 'styled-components'

export const PageContainer = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    flex-direction: column;
    margin-top: 1.25rem;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    flex-direction: column;
    margin-top: 1.25rem;
  }
  @media (max-width: 479px) {
    flex-direction: column;
    margin-top: 1.25rem;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 768px) and (max-width: 1024px) {
    align-items: center;
  }
  @media (min-width: 480px) and (max-width: 767px) {
    align-items: center;
  }
  @media (max-width: 479px) {
    align-items: center;
  }
`

export const ContainerButtons = styled.div`
  display: flex;

  @media (min-width: 1025px) and (max-width: 1100px) {
    padding-left: 2.5rem;
  }
  @media (min-width: 768px) and (max-width: 1025px) {
    padding-left: 2.5rem;
  }
  @media (min-width: 479px) and (max-width: 767px) {
    margin-top: 3rem;
  }
  @media (max-width: 479px) {
    margin-top: 3rem;
    margin-left: 1rem;
  }
`

export const ContainerImg = styled.div`
  @media (max-width: 479px) {
    > img {
      height: 370px;
      margin: 0 2rem 0 0;
    }
  }
`