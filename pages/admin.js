import {useState} from 'react'
import styled from 'styled-components'
import {TextField} from '@material-ui/core'
import api from './api'
import SubmitButton from '../src/components/SubmitButton'

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

    return (
        <>
            <ButtonsContainer>
                <button onClick={() => setForm(1)}>Cadastrar Estado</button>
                <button onClick={() => { 
                    getStates()
                    setForm(2)
                }}>Cadastrar Cidade</button>
                <button onClick={() => setForm(3)}>Cadastrar categoria</button>
            </ButtonsContainer>
            {
                form === 1 &&
                <form onSubmit={postState}>
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
                    <SubmitButton type='submit'>Cadastrar Estado</SubmitButton>
                </form>
            }

            {
                form === 2 &&
                <form onSubmit={postCity}>
                    <select onChange={(e) => setStateId(e.target.value)}>
                        <option>Selecione um estado</option>
                        {states.map((state) => {
                            return <option value={state.id} key={state.id}>{state.nome}</option>
                        })}
                    </select>
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
                    <SubmitButton type='submit'>Cadastrar Cidade</SubmitButton>
                </form>
            }
            {
                form === 3 &&
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
        </>
    )
}

export default Admin
