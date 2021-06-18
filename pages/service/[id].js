import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styled from 'styled-components'
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import ServiceBox from '../../src/components/ServiceBox'
import ButtonsContainerService  from '../../src/components/Utils/ButtonsContainerService'
import api from '../api'
import MapBox from '../../src/components/MapBox'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import Select from '../../src/components/Utils/Select'
import { BsSearch } from 'react-icons/bs'
import { TextField, MenuItem } from '@material-ui/core'

const ContainerFilter = styled.div`
  width: 80%;
  height: 70px;
  position: relative;
  top: -6rem;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;

  @media (min-width: 560px) and (max-width: 767px) {
    width: 90%;
    margin: 0 2rem;
  }
  @media (max-width: 560px) {
    width: 95%;
    margin: 0 auto;
    flex-direction: column;
    height: auto;
  }
`

const HelperText = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.colors.title};
  text-align: center;
`

export default function Service() {
  const CepCoords = require('coordenadas-do-cep')
  const router = useRouter()
  const { id } = router.query
  const [loaded, setLoaded] = useState(false)
  const [services, setServices] = useState([])
  const [cities, setCities] = useState([])
  const [city, setCity] = useState('')
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

  useEffect(() => {
    const getCities = async () => {
      await api.get('cidades').then((res) => setCities(res.data))
    }
    getCities()
  }, [])

  const renderEmptyList = () => {
    if (loaded) {
      return <HelperText>Nenhum serviço cadastrado nessa categoria!</HelperText>
    }

    return <CircularProgress style={{ marginLeft: '50%' }} />
  }

  const handleCep = () => {
    setCordinates([])
    CepCoords.getByCep(cep).then((info) => {
      const json = { lat: info.lat, lon: info.lon }
      setCordinates((coordinatesMap) => [...coordinatesMap, json])
      const latitude = info.lat
      const longitude = info.lon
      const getServicesSearch = async () => {
        await api.get(`servicos?categoriaId=${id}&latitude=${latitude}&longitude=%20${longitude}`)
          .then((res) => {
            setServices(res.data)
         
          })
      }
      getServicesSearch()
    })
 
    
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
          <MapBox zoom={9.5}>
            {coordinates.map((item, index) => {
              return (
                <AnyReactComponent key={index} lat={item.lat} lng={item.lon} />
              )
            })}
          </MapBox>
          <ContainerFilter>
            <>
              <Select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                label="Cidade"
                type="text"
              >
                {cities.map((city) => {
                  return (
                    <MenuItem key={city.id} value={city.id}>
                      {city.nome}
                    </MenuItem>
                  )
                })}
              </Select>
              <TextField
                value={cep}
                onChange={(ev) => setCep(ev.target.value)}
                label="CEP"
                variant="outlined"
                size="small"
                type="number"
                margin="normal"
                InputProps={{
                  endAdornment: <BsSearch onClick={handleCep} />,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}                
              >
                <AiOutlineCloseCircle size={25} onClick={resetFilter}/>
              </div>
            </>
          </ContainerFilter>
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
