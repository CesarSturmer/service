import {ContainerButtons, ContainerButtonsCenter} from './style'

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