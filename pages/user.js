import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import api from './api'
import UserInfoBox from '../src/components/UserInfoBox'
import SubmitButton from '../src/components/SubmitButton'
import UserForm from '../src/components/UserForm'
import ChangePassword from '../src/components/ChangePassword'
import Header from '../src/components/Header'
import Footer from '../src/components/Footer'

function User() {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState([])
    const [screenOption, setScreenOption] = useState(0)
    
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
            .catch(() => {
                alert('Sessão expirada!')
                sessionStorage.removeItem('validated_token')
                router.push('/login')
            })
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
            {userInfo.length !== 0 && screenOption === 0 &&
                <UserInfoBox
                    avaliation={2.5}
                    imageSrc={userInfo.midiaPath}
                    email={userInfo.email}
                    cpf={userInfo.cpf}
                    cep={userInfo.endereco.cep}
                    city={userInfo.endereco.cidade.nome}
                    state={userInfo.endereco.cidade.estado}
                    street={userInfo.endereco.logradouro}
                    number={userInfo.endereco.numero}
                    name={userInfo.nomeCompleto}
                    phone={userInfo.telefone}
                    editUser={() => setScreenOption(1)}
                    changePassword={() => setScreenOption(2)}
                />
            }
            {screenOption === 1 &&
                <UserForm serviceProvider edit data={userInfo} title='Editar informações de usuário!' back={() => setScreenOption(0)} />
            }
            {screenOption === 2 &&
                <ChangePassword back={() => setScreenOption(0)} />
            }
            <SubmitButton onClick={deleteUser}>Deletar Conta</SubmitButton>
            <Footer />
        </div>
    )
}

export default User
