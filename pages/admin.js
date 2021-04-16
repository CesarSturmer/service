import {useState} from 'react'
import {TextField} from '@material-ui/core'
import api from './api'
import SubmitButton from '../src/components/SubmitButton'

function Admin() {
    const [form, setForm] = useState(0)
    const [states, setStates] = useState([])
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [stateId, setStateId] = useState('')

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

    return (
        <>
            <button onClick={() => setForm(1)}>Cadastrar Estado</button>
            <button onClick={() => { 
                getStates()
                setForm(2)
            }}>Cadastrar Cidade</button>
            {form === 1 &&
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
            </form>}

            {form === 2 &&
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
            </form>}
        </>
    )
}

export default Admin
