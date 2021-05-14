import {useState} from 'react'
import styled from 'styled-components'
import {TextField, MenuItem} from '@material-ui/core'
import api from './api'
import SubmitButton from '../src/components/SubmitButton'
import FormContainer from '../src/components/Utils/FormContainer'
import Select from '../src/components/Utils/Select'

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`

function Admin() {
    const [form, setForm] = useState(0)
    const [states, setStates] = useState([])
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [stateId, setStateId] = useState('')
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])

    const getStates = async () => {
        await api.get('estados')
        .then((res) => setStates(res.data))
    }

    const postState = async (e) => {
        e.preventDefault()
        await api.post('estados', {
            nome: state
        })
        .then(() => {
            alert('Estado cadastrado!')
            setForm(0)
        })
        .catch(() => alert('Falha ao cadastrar estado!'))
    }

    const postCity = async (e) => {
        e.preventDefault()
        await api.post('cidades', {
            estado: {
                id: stateId
            },
            nome: city
        })
        .then(() => {
            alert('Cidade cadastrada!')
            setForm(0)
        })
        .catch(() => alert('Falha ao cadastrar cidade!'))
    }

    const postCategory = async (e) => {
        e.preventDefault()
        await api.post('categorias', {
            categoria: category
        })
        .then(() => {
            alert('categoria cadastrada com sucesso!!')
            setForm(0)
        })
        .catch(() => alert('Falha ao cadastrar categoria'))
    }

    const getCategories = async () => {
        await api.get('categorias')
        .then((res) => setCategories(res.data))
        .catch(() => alert('erro ao pegar categorias'))
    }

    return (
        <>
            <ButtonsContainer>
                <SubmitButton onClick={() => setForm(1)}>Cadastrar Estado</SubmitButton>
                <SubmitButton onClick={() => { 
                    getStates()
                    setForm(2)
                }}>Cadastrar Cidade</SubmitButton>
                <SubmitButton onClick={() => setForm(3)}>Cadastrar categoria</SubmitButton>
                <SubmitButton onClick={() => {
                    getCategories()
                    setForm(4)
                }}>Listar categoria</SubmitButton>
            </ButtonsContainer>
            {form === 1 &&
                <FormContainer 
                    onSubmit={postState}
                    title='Cadastre um novo estado'
                    buttonText='Cadastrar Estado'
                >
                    <TextField
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        label='Estado'
                        variant='outlined'
                        size='small'
                        type='text'
                        margin='normal'
                        fullWidth
                    />
                </FormContainer>
            }

            {form === 2 &&
                <FormContainer 
                    onSubmit={postCity}
                    title='Cadastre uma nova Cidade'
                    buttonText='Cadastrar Cidade'
                >
                    <Select 
                        value={stateId}
                        onChange={(e) => setStateId(e.target.value)}
                        label='Estado'
                    >
                        {states.map((state) => {
                            return <MenuItem value={state.id} key={state.id}>{state.nome}</MenuItem>
                        })}
                    </Select>
                    <TextField
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        label='Cidade'
                        variant='outlined'
                        size='small'
                        type='text'
                        margin='normal'
                        fullWidth
                    />
                </FormContainer>
            }
            {form === 3 &&
                <form onSubmit={postCategory}>
                    <TextField
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        label='Categoria'
                        variant='outlined'
                        size='small'
                        type='text'
                        margin='normal'
                        fullWidth
                    />
                    <SubmitButton type='submit'>Cadastrar Categoria</SubmitButton>
                </form>
            }
            {form === 4 &&
                <>
                    <ul style={{color: '#fff'}}>
                        {categories.map((category) => {
                            return <li key={category.id}>{category.categoria}</li>
                        })}
                    </ul>
                    <SubmitButton onClick={() => setForm(0)}>Esconder categorias</SubmitButton>
                </>
            }
        </>
    )
}

export default Admin
