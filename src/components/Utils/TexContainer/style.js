import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 2.25rem;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: bold;

  @media(min-width: 1025px) and (max-width: 1100px) {
    padding: 0 3.125rem;
    font-size: 2.5rem;
  }  
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 3.125rem;
    font-size: 1.875rem;
  }  
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 0 3.125rem;
    font-size: 1.25rem;

  }  
  @media (max-width: 479px) {
    padding: 0;
    font-size: 1rem;
  }  
`

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.title};
  font-style: normal;
  font-weight: normal;
  margin: 0 0 1rem 0;

  @media(min-width: 1025px) and (max-width: 1100px) {
    padding: 0 3.125rem;
    font-size: 1.25rem;
  } 
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 3.125rem;
    font-size: 1.25rem;
  } 
  @media (min-width: 480px) and (max-width: 767px) {
    font-size: 1.25rem;  
  } 
  @media (max-width: 479px) {
    font-size: 0.875rem;  
  } 
`