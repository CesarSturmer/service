import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import api from '../api'
import UserInfoBox from '../../src/components/UserInfoBox'
import ChangePassword from '../../src/components/ChangePassword'
import UserForm from '../../src/components/UserForm'
import Header from '../../src/components/Header'
import ServiceForm from '../../src/components/ServiceForm'
import ServiceList from '../../src/components/ServiceList'
import Footer from '../../src/components/Footer'
import MapBox from '../../src/components/MapBox/index'
import { FaMapMarkerAlt } from 'react-icons/fa'

const CepCoords = require('coordenadas-do-cep')

export default function ServiceProvider() {
  const router = useRouter()
  const { id } = router.query
  const [userInfo, setUserInfo] = useState([])
  const [screenOption, setScreenOption] = useState(0)
  const [coordinates, setCordinates] = useState([])
  const [latitude, setLatitude] = useState('')
  const [longitude, setLongitude] = useState('')
  const [radius, setRadius] = useState(0)

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
          router.push('/login')
        })
    }
    getUserInfo()
  }, []) 

  useEffect(() => {
    const getServices = async () => {
      await api
        .get(`servicos?prestadorId=${id}`)
        .then((res) => {
          const item = res.data[0]
          const maxDistance = item.distanciaMaxima * 1000
          setRadius(maxDistance);      
          res.data.map((item) => {            
            CepCoords.getByCep(item.prestadorServico.endereco.cep)
            .then((info) => {                         
                setLatitude(info.lat)
                setLongitude(info.lon)
              })
              .catch(() => {
                console.log('erro')
              })
          })
        })
        .catch(() => console.log('Nenhum serviço cadastrado!'))
    }
    getServices()
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
      .catch(() => alert('falha ao excluir o usuário!'))
  }

  const AnyReactComponent = () => (
    <div>
      <FaMapMarkerAlt size={15} />
    </div>
  )

  return (
    <div>
      <Header />
      <MapBox latCircle={latitude} lonCircle={longitude} radius={radius} zoom={10} coordinatesProvider={coordinates}>
        {
          coordinates.map((item, index) => {
            return <AnyReactComponent key={index} lat={item.lat} lng={item.lon} />  
          })
        }
      </MapBox>

      {userInfo.length !== 0 && screenOption === 0 && (
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
          deleteAccount={deleteUser}
        />
      )}
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
     
      <Footer />
    </div>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
