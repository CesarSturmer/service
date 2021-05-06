import {useState} from 'react'
import {useRouter} from 'next/router'
import {TextField} from '@material-ui/core'
import api from './api'
import FormContainer from '../src/components/FormContainer'
import Header from '../src/components/Header'
import SubmitButton from '../src/components/SubmitButton'

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
            router.push('/user')
        })
        .catch(() => alert('Usuário ou senha incorretos!'))
    }

    return (
        <>
            <Header />
            <FormContainer 
                title='faça seu login!' 
                onSubmit={handleSubmit}
                buttonText='Login'
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
        </>
    )
}

export default Login
