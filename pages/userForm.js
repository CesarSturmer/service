import {useState} from 'react'
import styled from 'styled-components'
import {Button, TextField} from '@material-ui/core'
import api from './api'

const FormContainer = styled.form`
    width: 30rem;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const TwoInputsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const SubmitButton = styled.button`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.secondary};
    padding: 0.5rem;
    border-radius: 8px;
    border: none;
    cursor: pointer;
`

function UserForm() {
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cep, setCep] = useState('')
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [neighborhood, setNeighborhood] = useState('')

    const postUser = async (e) => {
        e.preventDefault()
        await api.post('/usuario', {
            nomeCompleto: name,
            cpf: cpf,
            senha: password,
            email: email,
            telefone: phone,
            endereco: {
                cep: cep,
                logradouro: street,
                numero: number,
                bairro: neighborhood
            }
        })
        .then(() => alert('usuario cadastrado com sucesso'))
        .catch(() => alert('Falha ao cadastrar usuário!'))
    }

    return (
        <FormContainer onSubmit={postUser}>
            <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label='Nome completo'
                variant='outlined'
                size='small'
                type='text'
                margin='normal'
                fullWidth
            />
            <TwoInputsContainer>
                <TextField
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                    label='CPF'
                    variant='outlined'
                    size='small'
                    type='number'
                    margin='normal'
                />
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label='Senha'
                    variant='outlined'
                    size='small'
                    type='password'
                    margin='normal'
                />
            </TwoInputsContainer>
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label='Email'
                variant='outlined'
                size='small'
                type='text'
                margin='normal'
                fullWidth
            />
            <TwoInputsContainer>   
                <TextField
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    label='Telefone'
                    variant='outlined'
                    size='small'
                    type='number'
                    margin='normal'
                />
                <TextField
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    label='CEP'
                    variant='outlined'
                    size='small'
                    type='number'
                    margin='normal'
                />
            </TwoInputsContainer>
            <TwoInputsContainer>
                <TextField
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    label='Rua'
                    variant='outlined'
                    size='small'
                    type='text'
                    margin='normal'
                />
                <TextField
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    label='Número'
                    variant='outlined'
                    size='small'
                    type='number'
                    margin='normal'
                />
            </TwoInputsContainer>
            <TextField
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                label='Bairro'
                variant='outlined'
                size='small'
                type='text'
                margin='normal'
                fullWidth
            />
            <SubmitButton type='submit'>Cadastrar Usuário</SubmitButton>
        </FormContainer>
    )
}

export default UserForm
