import styled from 'styled-components'

export const Box = styled.div`
  width: 18rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  margin: 2rem 0;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  cursor: pointer;

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 16rem;
  }
  @media (max-width: 767px) {
    width: 15rem;
  }
`

export const Photo = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: ${({ theme }) => theme.borderRadius.max};

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 5rem;
    height: 5rem;
  }
  @media (max-width: 767px) {
    width: 5rem;
    height: 5rem;
  }
`

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
  }
`

export const Title = styled.p`
  font-weight: bold;
  margin: 0;

  @media (min-width: 768px) and (max-width: 1024px) {
  }
  @media (max-width: 767px) {
  }
`
