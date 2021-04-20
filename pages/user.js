import {useState, useEffect} from 'react'
import api from './api'
import UserInfoBox from '../src/components/UserInfoBox'

function User() {
    const [userInfo, setUserInfo] = useState([])
    if (typeof window !== 'undefined') {
        const token = localStorage.getItem('token')
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

    return (
        <div>
            {userInfo.length !== 0 &&
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
            />}
        </div>
    )
}

export default User
