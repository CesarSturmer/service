import styled from 'styled-components'

export const ContainerButtonService = styled.div`
  
  width: 80%;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;

 
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    justify-content: center;
  }  
  @media (max-width: 767px) {


  }  
 
`

export const ContainerButtonsCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  
  flex-wrap: wrap;
  

  
  @media (min-width: 768px) and (max-width: 1024px) {
    justify-content: space-between;
  }  
  @media(max-width: 767px) {
 

  }  
`