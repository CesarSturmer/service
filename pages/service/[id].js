import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from '@components/Header'
import Footer from '@components/Footer'
import ServiceBox from '@components/ServiceBox'
import ButtonsContainerService from '@components/Utils/ButtonsContainerService'
import api from 'pages/api'
import MapBox from '@components/MapBox'
import MapSearcher from '@components/MapSearcher'
import { FaMapMarkerAlt } from 'react-icons/fa'

const HelperText = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
  margin: 16rem 0;
`

export default function Service() {
  const CepCoords = require('coordenadas-do-cep')
  const router = useRouter()
  const { id } = router.query
  const [loaded, setLoaded] = useState(false)
  const [services, setServices] = useState([])
  const [cep, setCep] = useState('')
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

  const resetFilter = () => {
    setCordinates([])
    setCep('')
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
  }

  const handleSearchCep = (ev) => {
    setCep(ev.target.value)
  }

  const handleCep = () => {
    setCordinates([])
    CepCoords.getByCep(cep).then((info) => {
      const json = { lat: info.lat, lon: info.lon }
      setCordinates((coordinatesMap) => [...coordinatesMap, json])
      const latitude = info.lat
      const longitude = info.lon
      const getServicesSearch = async () => {
        await api
          .get(
            `servicos?categoriaId=${id}&latitude=${latitude}&longitude=%20${longitude}`
          )
          .then((res) => {
            setServices(res.data)
          })
      }
      getServicesSearch()
    })
  }

  const renderEmptyList = () => {
    if (loaded) {
      return (
      <ButtonsContainerService>
        <HelperText>Nenhum serviço cadastrado nessa categoria!</HelperText>

      </ButtonsContainerService>
    )}

    return <CircularProgress style={{ marginLeft: '50%' }} />
  }

  const AnyReactComponent = () => (
    <div>
      <FaMapMarkerAlt size={15} />
    </div>
  )



  return (
    <>
      <Header />
      {services.length >= 1 ? (
        <>
          <MapBox zoom={9.5} coordinatesProvider={[]}>
            {coordinates.map((item, index) => {
              return (
                <AnyReactComponent key={index} lat={item.lat} lng={item.lon} />
              )
            })}
          </MapBox>
          <MapSearcher
            handleCep={handleCep}
            handleSearchCep={handleSearchCep}
            resetFilter={resetFilter}
          />

          <ButtonsContainerService>
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
          </ButtonsContainerService>
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
