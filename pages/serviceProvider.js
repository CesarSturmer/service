import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import api from './api'
import {MenuItem, TextField} from '@material-ui/core'
import UserInfoBox from '../src/components/UserInfoBox'
import SubmitButton from '../src/components/SubmitButton'
import UserForm from '../src/components/UserForm'
import FormContainer from '../src/components/Utils/FormContainer'
import Header from '../src/components/Header'
import Select from '../src/components/Utils/Select'

function ServiceProvider() {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState([])
    const [categories, setCategories] = useState([])
    const [editUser, setEditUser] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [category, setCategory] = useState(0)
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    
    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('validated_token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

    useEffect(() => {
        const getUserInfo = async () => {
            await api.get('prestador')
            .then((res) => {
                console.log(res.data)
                setUserInfo(res.data)
            })
            .catch(() => {
                alert('Sessão expirada!')
                router.push('/login')
            })
        }
        getUserInfo()
    }, [])

    const deleteUser = async () => {
        await api.delete('prestador')
        .then(() => {
            alert('Usuário excluído com sucesso!')
            sessionStorage.removeItem('validated_token')
        })
        .catch(() => alert('falha ao cadastrar usuário!'))
    }

    const getCategories = async () => {
        await api.get('categorias')
        .then((res) => {
            setCategories(res.data) 
            console.log(res.data)
        })
        .catch(() => alert('erro ao pegar categorias'))
    }

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
        <div>
            <Header />
            {userInfo.length !== 0 && !editUser &&
                <UserInfoBox
                    cpf={userInfo.cpf}
                    email={userInfo.email}
                    neighborhood={userInfo.endereco.bairro}
                    cep={userInfo.endereco.cep}
                    city={userInfo.endereco.cidade.nome}
                    state={userInfo.endereco.cidade.estado}
                    complement={userInfo.endereco.complemento}
                    street={userInfo.endereco.logradouro}
                    number={userInfo.endereco.numero}
                    id={userInfo.id}
                    name={userInfo.nomeCompleto}
                    phone={userInfo.telefone}
                />
            }
            {editUser ? 
                <>
                    <UserForm edit data={userInfo} title='Editar informações de usuário!' />
                    <SubmitButton onClick={() => setEditUser(false)}>Voltar</SubmitButton>
                </>
            :
                <SubmitButton onClick={() => setEditUser(true)}>Editar informações</SubmitButton>
            }
            <SubmitButton onClick={deleteUser}>Deletar Conta</SubmitButton>
            {showServiceForm ?
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
            :
                <SubmitButton onClick={() => {
                    getCategories()
                    setShowServiceForm(true)
                }}>Cadastrar Serviço</SubmitButton>
            }
        </div>
    )
}

export default ServiceProvider