import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Select from '../Utils/Select'
import { BsSearch } from 'react-icons/bs'
import { TextField, MenuItem } from '@material-ui/core'
import api from '../../../pages/api'

const CepCoords = require('coordenadas-do-cep')

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
`

const MapSearcher = () => {
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState('');
    const [cep, setCep] = useState('');
    const [search, setSearch] = useState('');

    useEffect(() => {
        const getCities = async () => {
          await api.get('cidades').then((res) => setCities(res.data))
        }
        getCities()
      }, [])
    
      const handleCep = () => {
        CepCoords.getByCep(cep).then((info) => {
          const json = { lat: info.lat, lon: info.lon }
          setCoordinatesMap((coordinatesMap) => [...cordinatesMap, json])
        })
      }

      const handleSearch = () => {}

    return (
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
                  endAdornment: (
                    <BsSearch
                      onClick={handleCep}
                    />
                  ),
                }}
              ></TextField>
              <TextField
                value={search}
                onChange={(ev) => setSearch(ev.target.value)}
                label="Serviços Próximos"
                variant="outlined"
                size="small"
                type="search"
                margin="normal"
                InputProps={{
                  endAdornment: (
                    <BsSearch
                      onClick={handleSearch}
                    />
                  ),
                }}
              />
            </>
          </ContainerFilter>
    )
}

export default MapSearcher