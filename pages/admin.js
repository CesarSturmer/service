import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import {PageContainer, ButtonsContainer, MenuButton, List, ListItem} from '../styles/admin'
import {TextField, MenuItem} from '@material-ui/core'
import api from './api'
import FormContainer from '../src/components/Utils/FormContainer'
import Select from '../src/components/Utils/Select'

function Admin() {
    const router = useRouter()
    const [form, setForm] = useState(0)
    const [states, setStates] = useState([])
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [stateId, setStateId] = useState('')
    const [category, setCategory] = useState('')
    const [categories, setCategories] = useState([])

    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('validated_token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

    useEffect(() => {
        const getUserRole = async () => {
            await api.get('usuario')
            .then((res) => {
                if(res.data.perfis.length !== 3) {
                    router.push('/login')
                } 
            })
            .catch(() => {
                router.push('/login')
            })
        }
        getUserRole()
    }, [])

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
        <PageContainer>
            <ButtonsContainer>
                <h1>Serviço</h1>
                <MenuButton onClick={() => setForm(1)}>Cadastrar Estado</MenuButton>
                <MenuButton onClick={() => { 
                    getStates()
                    setForm(2)
                }}>Cadastrar Cidade</MenuButton>
                <MenuButton onClick={() => setForm(3)}>Cadastrar categoria</MenuButton>
                <MenuButton onClick={() => {
                    getCategories()
                    setForm(4)
                }}>Listar categoria</MenuButton>
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
                <FormContainer
                    onSubmit={postCategory}
                    title='Cadastre uma nova Categoria'
                    buttonText='Cadastrar Categoria'
                >
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
                </FormContainer>
            }
            {form === 4 &&
                <FormContainer
                    onSubmit={() => setForm(0)}
                    title='Lista de Categorias'
                    buttonText='Esconder categorias'
                >
                    <List>
                        {categories.map((category) => {
                            return <ListItem key={category.id}>{category.categoria}</ListItem>
                        })}
                    </List>
                </FormContainer>
            }
        </PageContainer>
    )
}

export default Admin
