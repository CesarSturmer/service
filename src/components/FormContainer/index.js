import styled from 'styled-components'
import SubmitButton from '../SubmitButton'

const Form = styled.form`
    background-color: ${({ theme }) => theme.colors.backgroundWhite};
    padding: 2rem;
    width: 30rem;
    margin: 1rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: ${({ theme }) => theme.borderRadius.default};
`

const Title = styled.h1`
    color: ${({ theme }) => theme.colors.secondary};
    max-width: 15rem;
    text-align: center;
`

const FormContainer = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            <Title>{props.title}</Title>
            {props.children}
            <SubmitButton type='submit'>{props.buttonText}</SubmitButton>
        </Form>
    )
}

export default FormContainer