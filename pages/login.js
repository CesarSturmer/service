import {useState} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import {TextField} from '@material-ui/core'
import api from './api'

const FormContainer = styled.form`
    width: 15rem;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const SubmitButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
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
            sessionStorage.setItem('token', res.data.token)
            router.push('/')
        })
        .catch(() => alert('Erro'))
    }

    return (
        <FormContainer onSubmit={handleSubmit}>
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

            <SubmitButton type='submit'>Login</SubmitButton>
        </FormContainer>
    )
}

export default Login
