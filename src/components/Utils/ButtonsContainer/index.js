import {ContainerButtons, ContainerButtonsCenter} from './style'

const ButtonsContainer = ({children}) => {
    return (
        <ContainerButtons>
            <ContainerButtonsCenter>
                {children}
            </ContainerButtonsCenter>
        </ContainerButtons>
    )
}

export default ButtonsContainer