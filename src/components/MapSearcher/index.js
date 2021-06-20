import { useState, useEffect } from 'react'
import * as style from './style'
import Select from '../Utils/Select'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { TextField, MenuItem } from '@material-ui/core'
import api from '../../../pages/api'



const MapSearcher = ({handleCep, resetFilter, handleSearchCep }) => {
    const [cities, setCities] = useState([]);
    const [city, setCity] = useState('');
    
    useEffect(() => {
        const getCities = async () => {
          await api.get('cidades').then((res) => setCities(res.data))
        }
        getCities()
      }, [])

    return (
        <style.ContainerFilter>
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
                onChange={handleSearchCep}
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
                <AiOutlineCloseCircle size={25} onClick={resetFilter} />
              </div>
    
            </>
          </style.ContainerFilter>
    )
}

export default MapSearcher