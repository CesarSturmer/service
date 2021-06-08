import styled from 'styled-components';

const ContainerButtons = styled.div`
  border-radius: 6.25rem;
  width: 80%;
  margin: 10rem 0 0 10rem;
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;

 
  @media (min-width: 768px) and (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
    justify-content: center;
  }  
  @media (min-width: 320px) and (max-width: 767px) {
    width: 70%;
    margin: 0 auto;
    border-radius: 3.25rem;
    justify-content: center;

  }  
 
`;

const ContainerButtonsCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 4rem;
  flex-wrap: wrap;
  padding: 0 4rem;

  
  @media (min-width: 768px) and (max-width: 1024px) {
    padding: 0 2rem;
    margin: 2rem;
  }  
  @media (min-width: 320px) and (max-width: 767px) {
    padding: 0 2rem;
    margin: 2rem;

  }  
`;

const ButtonsContainer = (props) => {
    return (
        <ContainerButtons style={props.backgroundNone &&{ backgroundColor: '#FFFFFF'}}>
            <ContainerButtonsCenter>
                {props.children}
            </ContainerButtonsCenter>
        </ContainerButtons>
    )
}

export default ButtonsContainer