import {useState, useEffect} from 'react'
import api from './api'
import UserInfoBox from '../src/components/UserInfoBox'
import SubmitButton from '../src/components/SubmitButton'
import UserForm from '../src/components/UserForm'
import Header from '../src/components/Header'

function User() {
    const [userInfo, setUserInfo] = useState([])
    const [editUser, setEditUser] = useState(false)
    
    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('validated_token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

    useEffect(() => {
        const getUserInfo = async () => {
            await api.get('usuario')
            .then((res) => {
                setUserInfo(res.data)
            })
            .catch(() => alert('falha!'))
        }
        getUserInfo()
    }, [])

    const deleteUser = async () => {
        await api.delete('usuario')
        .then(() => {
            alert('Usuário excluído com sucesso!')
            sessionStorage.removeItem('validated_token')
        })
        .catch(() => alert('falha ao cadastrar usuário!'))
    }

    return (
        <div>
            <Header />
            {userInfo.length >= 0 && !editUser &&
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
                    <UserForm serviceProvider edit data={userInfo} title='Editar informações de usuário!' />
                    <SubmitButton onClick={() => setEditUser(false)}>Voltar</SubmitButton>
                </>
            :
                <SubmitButton onClick={() => setEditUser(true)}>Editar informações</SubmitButton>
            }
            <SubmitButton onClick={deleteUser}>Deletar Conta</SubmitButton>
        </div>
    )
}

export default User
