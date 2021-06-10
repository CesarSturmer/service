import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import ServiceBox from '../../src/components/ServiceBox'
import ButtonsContainer from '../../src/components/Utils/ButtonsContainer'
import api from '../api'
import MapBox from '../../src/components/MapBox'

const CepCoords = require('coordenadas-do-cep')

export default function Service() {
  const router = useRouter()
  const { id } = router.query
  const [services, setServices] = useState([])
  const [coordinates, setCordinates] = useState([])

  useEffect(() => {
    const getServices = async () => {
      await api.get(`servicos?categoriaId=${id}`)
        .then((res) => {
          setServices(res.data)
          res.data.map((item) => {
            CepCoords.getByCep(item.prestadorServico.endereco.cep)
            .then((info) => {
              const json = {lat: info.lat, lon: info.lon}
              setCordinates(coordinates => [...coordinates, json])
            })
          })
        }
        )}
    getServices()
  }, [])

  return (
    <>
      <Header />
      {services.length >= 1 ? 
        <>
        <MapBox coordinates={coordinates} />
        <ButtonsContainer>
          {services.map((service) => {
            return (
                <ServiceBox 
                  key={service.id}
                  to={`/serviceDetails/${service.id}`}
                  title={service.titulo} 
                  serviceProvider={service.prestadorServico.nomeCompleto}
                  imageSrc={service.prestadorServico.midiaPath}
                  avaliation={service.notaMedia} 
                />
            );
          })}
        </ButtonsContainer>
        </>
      :
        <h1>Nenhum serviço cadastrado nessa categoria!</h1>
      }
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
