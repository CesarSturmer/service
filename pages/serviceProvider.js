import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import api from './api'
import UserInfoBox from '../src/components/UserInfoBox'
import SubmitButton from '../src/components/SubmitButton'
import UserForm from '../src/components/UserForm'
import Header from '../src/components/Header'
import ServiceForm from '../src/components/ServiceForm'

function ServiceProvider() {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState([])
    const [categories, setCategories] = useState([])
    const [editUser, setEditUser] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    
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
                <ServiceForm />
            :
                <SubmitButton onClick={() => setShowServiceForm(true)}>Cadastrar Serviço</SubmitButton>
            }
        </div>
    )
}

export default ServiceProvider