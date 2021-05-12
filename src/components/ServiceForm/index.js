import {useState, useEffect} from 'react'
import {TextField, MenuItem} from '@material-ui/core'
import {useRouter} from 'next/router'
import api from '../../../pages/api'
import FormContainer from '../Utils/FormContainer'
import Select from '../Utils/Select'

const ServiceForm = () => {
    const router = useRouter()
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState(0)
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        const getCategories = async () => {
            await api.get('categorias')
            .then((res) => {
                setCategories(res.data) 
                console.log(res.data)
            })
            .catch(() => alert('erro ao pegar categorias'))
        }
        getCategories()
    }, [])

    const postService = async (e) => {
        e.preventDefault()
        await api.post('servicos', {
            categoria: {
                id: category
            },
            descricao: description,
            titulo: title
        })
        .then(() => {
            alert('Serviço Cadastrado com sucesso')
            router.reload()
        })
        .catch(() => alert('Falha ao cadastrar serviço'))
    }

    return (
        <FormContainer
            onSubmit={postService}
            title='Cadastrar Serviço'
            buttonText='Cadastrar'
        >
            <Select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label='Categoria'
            >
                {
                    categories.map((category) => {
                        return <MenuItem key={category.id} value={category.id}>{category.categoria}</MenuItem>
                    })
                }
            </Select>
            <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label='Título'
                variant='outlined'
                size='small'
                type='text'
                margin='normal'
                fullWidth
                required
            />
            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label='Descrição'
                variant='outlined'
                size='small'
                type='text'
                margin='normal'
                fullWidth
                required
            />
        </FormContainer>
    )
}

export default ServiceForm