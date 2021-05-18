import styled from 'styled-components'
import Link from 'next/link';
import SubmitButton from '../../SubmitButton'

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

const Container = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.secondary};
    align-items: center;
    font-size: 0.9rem;
`

const LinkText = styled.a`
    text-decoration: underline;
`

const FormContainer = (props) => {
    return (
        <Form onSubmit={props.onSubmit}>
            <Title>{props.title}</Title>
            {props.children}
            <SubmitButton type='submit'>{props.buttonText}</SubmitButton>
            {props.helperText &&
                <Container>
                    <p>{props.helperText}</p>
                    <Link href={props.to}>
                        <LinkText>{props.linkText}</LinkText>
                    </Link>
                </Container>
            }
        </Form>
    )
}

export default FormContainer