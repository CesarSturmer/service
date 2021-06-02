import styled from 'styled-components'
import {useState} from 'react'
import {useRouter} from 'next/router'
import {TextField} from '@material-ui/core'
import api from './api'
import FormContainer from '../src/components/Utils/FormContainer'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

function Login() {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        await api.post('auth', {
            email: email,
            senha: password
        })
        .then((res) => {
            sessionStorage.setItem('validated_token', res.data.token)
            router.push('/serviceSearch')
        })
        .catch(() => alert('Usuário ou senha incorretos!'))
    }

    return (
        <Container>
            <Header />
            <FormContainer 
                title='Faça seu login!' 
                onSubmit={handleSubmit}
                buttonText='Login'
                helperText='Ainda não possui uma conta?'
                linkText='Clique aqui para criar'
                to='/userForm'
            >
                <TextField
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    label='Email'
                    variant='outlined'
                    size='small'
                    type='email'
                    margin='normal'
                    fullWidth
                />
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label='Senha'
                    variant='outlined'
                    size='small'
                    type='password'
                    margin='normal'
                    fullWidth
                />
            </FormContainer>
            <Footer />
        </Container>
    )
}

export default Login
