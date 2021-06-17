import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import ServiceBox from '../../src/components/ServiceBox'
import ButtonsContainer from '../../src/components/Utils/ButtonsContainer'
import MapSearcher from '../../src/components/MapSearcher'
import api from '../api'
import MapBox from '../../src/components/MapBox'

const CepCoords = require('coordenadas-do-cep')

const HelperText = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`

export default function Service() {
  const router = useRouter()
  const { id } = router.query
  const [loaded, setLoaded] = useState(false)
  const [services, setServices] = useState([])
  const [coordinates, setCordinates] = useState([])

  useEffect(() => {
    const getServices = async () => {
      await api.get(`servicos?categoriaId=${id}`).then((res) => {
        setServices(res.data)
        setLoaded(true)
        res.data.map((item) => {
          CepCoords.getByCep(item.prestadorServico.endereco.cep).then(
            (info) => {
              const json = { lat: info.lat, lon: info.lon }
              setCordinates((coordinates) => [...coordinates, json])
            }
          )
        })
      })
    }
    getServices()
  }, [])

  const renderEmptyList = () => {
    if(loaded) {
      return <HelperText>Nenhum serviço cadastrado nessa categoria!</HelperText>
    }

    return <CircularProgress style={{marginLeft: '50%'}} />
  }

  return (
    <>
      <Header />
      {services.length >= 1 ? (
        <>
          <MapBox coordinates={coordinates} coordinatesMap={[]} />
          <MapSearcher />
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
              )
            })}
          </ButtonsContainer>
        </>
      ) : (
        renderEmptyList()
      )}
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
