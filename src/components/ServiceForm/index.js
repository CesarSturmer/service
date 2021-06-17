import {useState, useEffect} from 'react'
import {TextField, MenuItem} from '@material-ui/core'
import {useRouter} from 'next/router'
import api from '../../../pages/api'
import FormContainer from '../Utils/FormContainer'
import Select from '../Utils/Select'

const ServiceForm = ({back, service}) => {
    const router = useRouter()
    const [categories, setCategories] = useState([])
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [maxDistance, setMaxDistance] = useState('')

    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('validated_token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

    useEffect(() => {
        const getCategories = async () => {
            await api.get('categorias')
            .then((res) => setCategories(res.data))
            .catch(() => alert('erro ao pegar categorias'))
        }
        if(service) {
            setCategory(service.categoria.id)
            setDescription(service.descricao)
            setTitle(service.titulo)
            setMaxDistance(service.distanciaMaxima)
        }
        getCategories()
    }, [])

    const postService = async () => {
        await api.post('servicos', {
            categoria: {
                id: category
            },
            descricao: description,
            distanciaMaxima: maxDistance,
            titulo: title
        })
        .then(() => {
            alert('Serviço Cadastrado com sucesso')
            router.reload()
        })
        .catch(() => alert('Falha ao cadastrar serviço'))
    }

    const putService = async () => {
        await api.put(`servicos/${service.id}`, {
            categoria: {
                id: category
            },
            descricao: description,
            distanciaMaxima: maxDistance,
            titulo: title
        })
        .then(() => {
            alert('Serviço Editado com sucesso')
            router.reload()
        })
        .catch(() => alert('Falha ao editar serviço'))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(service) {
            putService()
        } else {
            postService()
        }
    }

    return (
        <FormContainer
            onSubmit={onSubmit}
            title='Cadastrar Serviço'
            buttonText='Cadastrar'
            back={back}
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
            <TextField
                value={maxDistance}
                onChange={(e) => setMaxDistance(e.target.value)}
                label='Distância máxima (Km)'
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