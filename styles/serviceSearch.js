import styled from 'styled-components'

export const PageContainer = styled.div`
  margin: 6rem 0 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: 1025px) and (max-width: 1100px) {
    margin: 3rem 0 0 5rem;
  }  
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 4rem 0;
    justify-content: center;
    align-items: center;
  }  
  @media (min-width: 320px) and (max-width: 767px) {
    margin: 4rem 0;
    justify-content: center;
    align-items: center;
 
  }  
`