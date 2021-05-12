import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import styled from 'styled-components'
import {TextField, MenuItem, Checkbox, FormControlLabel} from '@material-ui/core'
import api from '../../../pages/api'
import {useRouter} from 'next/router'
import FormValidations from '../../contexts/FormValidations'
import useError from '../../hooks/useError'
import FormContainer from '../FormContainer'

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
    const [serviceProvider, setServiceProvider] = useState(false)
    const [complement, setComplement] = useState('')
    const validations = useContext(FormValidations)
    const [error, fieldValidator, canSend] = useError(validations)

    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('validated_token')
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

    const postUser = async () => {
        const endPoint = serviceProvider ? 'prestador' : 'usuario'
        await api.post(endPoint, {
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

    const editUser = async () => {
        const endPoint = props.serviceProvider ? 'prestador' : 'usuario'
        await api.put(endPoint, {
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
            telefone: phone,
        })
        .then(() => {
            alert('usuário editado com sucesso')
            router.reload()
        })
        .catch(() => alert('falha ao editar'))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(canSend()) {
            if(props.edit) {
                editUser()
            } else {
                postUser()
            }
        } else {
            alert('Dados inválidos!')
        }
            
    }

    return (
        <FormContainer 
            title={props.title} 
            onSubmit={onSubmit}
            buttonText={props.edit ? 'Editar' : 'Cadastrar'}
        >
            <TextField
                value={name}
                onChange={(e) => setName(e.target.value)}
                label='Nome completo'
                variant='outlined'
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
                variant='outlined'
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
                        variant='outlined'
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
                        variant='outlined'
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
                    variant='outlined'
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
                    variant='outlined'
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
                variant='outlined'
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
                    variant='outlined'
                    size='small'
                    type='text'
                    margin='normal'
                    required
                />
                <TextField
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    label='Número'
                    variant='outlined'
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
                variant='outlined'
                size='small'
                type='text'
                margin='normal'
                fullWidth
            />
            <TwoInputsContainer>
                <TextField
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    label='Cidade'
                    variant='outlined'
                    size='small'
                    type='number'
                    margin='normal'
                    style={{minWidth: '40%'}}
                    select
                    required
                >
                    {
                        cities.map((city) => {
                            return <MenuItem key={city.id} value={city.id}>{city.nome}</MenuItem>
                        })
                    }
                </TextField>
                {!props.edit &&
                    <FormControlLabel 
                        control={
                            <Checkbox 
                                checked={serviceProvider}
                                onChange={(e) => setServiceProvider(e.target.checked)}
                                color='primary'
                            />
                        }
                        label='Prestador de Serviços'
                    />
                }
            </TwoInputsContainer>
        </FormContainer>
    )
}

export default UserForm
