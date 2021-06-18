import styled from 'styled-components'

export const PageContainer = styled.div`
  margin: 6rem 0 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: 1025px) and (max-width: 1100px) {
    margin: 4rem 0 0 10rem;
  }  
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 4rem 5rem;
    justify-content: center;
    align-items: center;
  }  
  @media (max-width: 767px) {
    margin: 4rem 0;
    justify-content: center;
    align-items: center;
 
  }  
`