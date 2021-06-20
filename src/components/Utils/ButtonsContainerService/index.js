import {ContainerButtonService, ContainerButtonsCenter} from './style'

const ButtonsContainerService = ({children}) => {
    return (
        <ContainerButtonService>
            <ContainerButtonsCenter>
                {children}
            </ContainerButtonsCenter>
        </ContainerButtonService>
    )
}

export default ButtonsContainerService