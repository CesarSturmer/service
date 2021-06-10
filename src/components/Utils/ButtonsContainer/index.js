import {ContainerButtons, ContainerButtonsCenter} from './style'

const ButtonsContainer = ({children, backGround}) => {
    return (
        <ContainerButtons style={ backGround &&{ backgroundColor: 'transparent'}}>
            <ContainerButtonsCenter>
                {children}
            </ContainerButtonsCenter>
        </ContainerButtons>
    )
}

export default ButtonsContainer