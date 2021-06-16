import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import api from './api'
import UserInfoBox from '../src/components/UserInfoBox'
import ChangePassword from '../src/components/ChangePassword'
import SubmitButton from '../src/components/SubmitButton'
import UserForm from '../src/components/UserForm'
import Header from '../src/components/Header'
import ServiceForm from '../src/components/ServiceForm'
import ServiceList from '../src/components/ServiceList'
import Footer from '../src/components/Footer'
import MapBox from '../src/components/MapBox/index'

const CepCoords = require('coordenadas-do-cep')

function ServiceProvider() {
    const router = useRouter()
    const [userInfo, setUserInfo] = useState([])
    const [screenOption, setScreenOption] = useState(0)
    const [coordinates, setCordinates] = useState([])

    const back = () => setScreenOption(0)

    if (typeof window !== 'undefined') {
      const token = sessionStorage.getItem('validated_token')
      api.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

    useEffect(() => {
      const getUserInfo = async () => {
        await api
          .get('usuario')
          .then((res) => {
            setUserInfo(res.data)
            CepCoords.getByCep(res.data.endereco.cep)
              .then((info) => {
                const json = { lat: info.lat, lon: info.lon }
                setCordinates((coordinates) => [...coordinates, json])
              })
              .catch(() => {
                console.log('erro')
              })
          })
          .catch(() => {
            alert('Sessão expirada!')
            router.push('/login')
          })
      }
      getUserInfo()
    }, [])

  const deleteUser = async () => {
    await api
      .delete('usuario')
      .then(() => {
        sessionStorage.removeItem('session_active')
        sessionStorage.removeItem('validated_token')
        alert('Usuário excluído com sucesso!')
        router.push('/')
      })
      .catch(() => alert('falha ao cadastrar usuário!'))
  }

  return (
    <div>
      <Header />
      <MapBox coordinates={coordinates} coordinatesMap={[]} />
      {userInfo.length !== 0 && screenOption === 0 &&
          <UserInfoBox
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
            openServiceForm={() => setScreenOption(3)}
            openServiceList={() => setScreenOption(4)}
            serviceProvider={true}
          />
      }
      {screenOption === 1 && 
        <UserForm edit data={userInfo} title='Editar informações de usuário!' back={back} />
      }
      {screenOption === 2 &&
        <ChangePassword back={back} />
      }
      {screenOption === 3 &&
        <ServiceForm back={back} />
      }
      {screenOption === 4 &&
          <ServiceList id={userInfo.id} back={back} />
      }
      <SubmitButton onClick={deleteUser}>Deletar Conta</SubmitButton>
      <Footer />
    </div>
  )
}

export default ServiceProvider
