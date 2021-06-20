import Link from 'next/link'
import {Form, BackContainer, Title, Container, LinkText} from './style'
import SubmitButton from '../../SubmitButton'
import { IoArrowBack } from 'react-icons/io5'

const FormContainer = (props) => {
  return (
    <Form onSubmit={props.onSubmit}>
      {props.back && (
        <BackContainer onClick={props.back}>
          <IoArrowBack />
        </BackContainer>
      )}
      <Title>{props.title}</Title>
      {props.children}
      <SubmitButton type="submit">{props.buttonText}</SubmitButton>
      {props.helperText && (
        <Container>
          <p>{props.helperText}</p>
          <Link href={props.to}>
            <LinkText>{props.linkText}</LinkText>
          </Link>
        </Container>
      )}
     
    </Form>
  )
}

export default FormContainer
