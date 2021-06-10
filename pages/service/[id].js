import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import ServiceBox from '../../src/components/ServiceBox';
import ButtonsContainer from '../../src/components/Utils/ButtonsContainer';
import api from '../api';
import MapBox from '../../src/components/MapBox';
import styled from 'styled-components';
import Select from '../../src/components/Utils/Select';
import { BsSearch } from 'react-icons/bs';
import { TextField, MenuItem } from '@material-ui/core';

const CepCoords = require('coordenadas-do-cep');

const ContainerFilter = styled.div`
  width: 80%;
  height: 100px;
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
`;

export default function Service() {
  const router = useRouter();
  const { id } = router.query;
  const [services, setServices] = useState([]);
  const [coordinates, setCordinates] = useState([]);
  const [coordinatesMap, setCoordinatesMap] = useState([]);
  const [cities, setCities] = useState([]);
  const [city, setCity] = useState('');
  const [cep, setCep] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const getServices = async () => {
      await api.get(`servicos?categoriaId=${id}`).then((res) => {
        setServices(res.data);
        res.data.map((item) => {
          CepCoords.getByCep(item.prestadorServico.endereco.cep)
            .then((info) => {
              const json = { lat: info.lat, lon: info.lon };
              setCordinates((coordinates) => [...coordinates, json]);
            })
            .catch(() => {
              console.log('erro');
            });
        });
      });
    };
    getServices();
  }, []);

  useEffect(() => {
    const getCities = async () => {
      await api.get('cidades').then((res) => setCities(res.data));
    };
    getCities();
  }, []);

  const handleCep = () => {
    CepCoords.getByCep(cep).then((info) => {
      const json = { lat: info.lat, lon: info.lon };
      setCoordinatesMap((coordinatesMap) => [...coordinatesMap, json]);
    });
  };

  const handleSearch = () => {};

  return (
    <>
      <Header />
      {services.length >= 1 ? (
        <>
          <MapBox coordinates={coordinates} coordinatesMap={coordinatesMap} />
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
                  );
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
                      style={{ cursor: 'pointer' }}
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
                      style={{ cursor: 'pointer' }}
                    />
                  ),
                }}
              />
            </>
          </ContainerFilter>
          <ButtonsContainer backGround>
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
      ) : (
        <h1>Nenhum serviço cadastrado nessa categoria!</h1>
      )}
      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
