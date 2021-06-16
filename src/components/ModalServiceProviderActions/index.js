import styled from 'styled-components'

const Modal = styled.div `
    position: absolute;
    width: 10rem;
    top: 2rem;
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
    color: ${({ theme }) => theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: 1rem;
`

const ModalServiceProviderActions = ({openServiceForm, openServiceList}) => {


    return (
        <Modal>
            <p onClick={openServiceForm}>Cadastrar Serviço</p>
            <p onClick={openServiceList}>Listar Serviços</p>
        </Modal>
    )
}

export default ModalServiceProviderActions