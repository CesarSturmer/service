import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {TextField, MenuItem} from '@material-ui/core'
import api from '../../../pages/api'
import SubmitButton from '../SubmitButton'
import {useRouter} from 'next/router'
import FormValidations from '../../contexts/FormValidations'
import useError from '../../hooks/useError'

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

function UserForm(props) {
    const router = useRouter()
    const [cities, setCities] = useState([])
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [cep, setCep] = useState('')
    const [cepError, setCepError] = useState({error: false, text: ''})
    const [street, setStreet] = useState('')
    const [number, setNumber] = useState('')
    const [neighborhood, setNeighborhood] = useState('')
    const [city, setCity] = useState('')
    const [complement, setComplement] = useState('')
    const validations = useContext(FormValidations)
    const [error, fieldValidator, canSend] = useError(validations)

    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

    useEffect(() => {
        const getCities = async () => {
            await api.get('cidades')
            .then((res) => setCities(res.data))
        }
        getCities()
        if (props.data) {
            setName(props.data.nomeCompleto)
            setEmail(props.data.email)
            setPhone(props.data.telefone)
            setCep(props.data.endereco.cep)
            setNeighborhood(props.data.endereco.bairro)
            setStreet(props.data.endereco.logradouro)
            setNumber(props.data.endereco.numero)
            setComplement(props.data.endereco.complemento)
            setCity(props.data.endereco.cidade.id)
            setComplement(props.data.endereco.complemento)
            console.log(props.data)
        }
    }, [])

    const cepValidator = async () => {
        await axios.get(`https://viacep.com.br/ws/${cep}/json`)
        .then((res) => {
            setStreet(res.data.logradouro)
            setNeighborhood(res.data.bairro)
            setCepError({error: false, text: ''})
        })
        .catch(() => setCepError({error: true, text: 'CEP inválido!'}))
    }

    const postUser = async (e) => {
        e.preventDefault()
        await api.post('usuario', {
            cpf: cpf,
            email: email,
            endereco: {
                bairro: neighborhood,
                cep: cep,
                cidade: {
                    id: city
                },
                complemento: complement,
                logradouro: street,
                numero: number,
            },
            nomeCompleto: name,
            senha: password,
            telefone: phone,
        })
        .then(() => alert('usuario cadastrado com sucesso'))
        .catch(() => alert('Falha ao cadastrar usuário!'))
    }

    const editUser = async (e) => {
        e.preventDefault()
        await api.put('usuario', {
            email: email,
            endereco: {
                bairro: neighborhood,
                cep: cep,
                cidade: {
                    id: city
                },
                complemento: complement,
                logradouro: street,
                numero: number
            },
            nomeCompleto: name,
            telefone: phone
        })
        .then(() => {
            alert('usuário editado com sucesso')
            router.reload()
        })
        .catch(() => alert('falha ao editar'))
    }

    return (
        <FormContainer onSubmit={props.edit ? editUser : postUser}>
            <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label='Nome completo'
                variant='filled'
                size='small'
                type='text'
                margin='normal'
                fullWidth
                required
            />
            <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                label='Email'
                variant='filled'
                size='small'
                type='email'
                margin='normal'
                fullWidth
                required
            />
            {!props.edit &&
                <TwoInputsContainer>
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={fieldValidator}
                        error={error.password.error}
                        helperText={error.password.text}
                        label='Senha'
                        name='password'
                        variant='filled'
                        size='small'
                        type='password'
                        margin='normal'
                        style={{maxWidth: '14rem'}}
                        required
                    />
                    <TextField
                        value={cpf}
                        onChange={(e) => setCpf(e.target.value)}
                        onBlur={fieldValidator}
                        error={error.cpf.error}
                        helperText={error.cpf.text}
                        label='CPF'
                        name='cpf'
                        variant='filled'
                        size='small'
                        type='number'
                        margin='normal'
                        required
                    />
                </TwoInputsContainer>
            }
            <TwoInputsContainer>   
                <TextField
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onBlur={fieldValidator}
                    error={error.phone.error}
                    helperText={error.phone.text}
                    label='Telefone'
                    name='phone'
                    variant='filled'
                    size='small'
                    type='number'
                    margin='normal'
                    required
                />
                <TextField
                    value={cep}
                    onChange={(e) => setCep(e.target.value)}
                    onBlur={cepValidator}
                    error={cepError.error}
                    helperText={cepError.text}
                    label='CEP'
                    variant='filled'
                    size='small'
                    type='number'
                    margin='normal'
                    required
                />
            </TwoInputsContainer>
            <TextField
                value={neighborhood}
                onChange={(e) => setNeighborhood(e.target.value)}
                label='Bairro'
                variant='filled'
                size='small'
                type='text'
                margin='normal'
                fullWidth
                required
            />
            <TwoInputsContainer>
                <TextField
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    label='Rua'
                    variant='filled'
                    size='small'
                    type='text'
                    margin='normal'
                    required
                />
                <TextField
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    label='Número'
                    variant='filled'
                    size='small'
                    type='number'
                    margin='normal'
                    required
                />
            </TwoInputsContainer>
            <TextField
                value={complement}
                onChange={(e) => setComplement(e.target.value)}
                label='Complemento'
                variant='filled'
                size='small'
                type='text'
                margin='normal'
                fullWidth
            />
            
            <TextField
                value={city}
                onChange={(e) => setCity(e.target.value)}
                label='Cidade'
                variant='filled'
                size='small'
                type='number'
                margin='normal'
                style={{backgroundColor: '#fefefe', borderRadius: '8px'}}
                select
                required
                fullWidth
            >
                {
                    cities.map((city) => {
                        return <MenuItem key={city.id} value={city.id}>{city.nome}</MenuItem>
                    })
                }
            </TextField>
            <SubmitButton type='submit'>{props.edit ? 'Editar' : 'Cadastrar'}</SubmitButton>
        </FormContainer>
    )
}

export default UserForm
