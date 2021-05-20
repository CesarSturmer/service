import styled from 'styled-components';

const ContainerButtons = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 6.25rem;
  width: 80%;
  margin: 10rem 0 0 10rem;
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
`;

const ContainerButtonsCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 4rem;
  flex-wrap: wrap;
  padding: 0 4rem;
`;

const ButtonsContainer = (props) => {
    return (
        <ContainerButtons>
            <ContainerButtonsCenter>
                {props.children}
            </ContainerButtonsCenter>
        </ContainerButtons>
    )
}

export default ButtonsContainer