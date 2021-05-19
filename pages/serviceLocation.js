import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Header from '../src/components/Header';
import Select from '../src/components/Utils/Select';
import api from './api';
import { MenuItem } from '@material-ui/core';

const Section = styled.main`
  height: 100px;
  background: #22aac1;
  margin: 0 auto;
  width: 80%;
  border-radius: 0.75rem;
  position: relative;
  top: -1.875rem;
  z-index: 9999;
`;

export default function ServiceLocation() {
  const MapWithNoSSR = dynamic(() => import('../src/components/MapBox'), {
    ssr: false,
  });

  const [city, setCity] = useState([]);

  useEffect(() => {
    const getCities = async () => {
      await api.get('cidades').then((res) => setCity(res.data));
    };
    getCities();
    // if (props.data) {
    //     setName(props.data.nomeCompleto)
    //     setEmail(props.data.email)
    //     setPhone(props.data.telefone)
    //     setCep(props.data.endereco.cep)
    //     setNeighborhood(props.data.endereco.bairro)
    //     setStreet(props.data.endereco.logradouro)
    //     setNumber(props.data.endereco.numero)
    //     setComplement(props.data.endereco.complemento)
    //     setCity(props.data.endereco.cidade.id)
    //     setComplement(props.data.endereco.complemento)
    //     console.log(props.data)
    // }
  }, []);

  return (
    <div>
      <Header />

      <MapWithNoSSR />

      <Section>
        <div>
          <Select
            value={city}
            onChange={(e) => setCity(e.targe.valuet)}
            label="Cidade"
          >
            {city.map((cities) => {
              return (
                <MenuItem key={cities.id} value={cities.id}>
                  {cities.nome}
                </MenuItem>
              );
            })}
          </Select>
        </div>
      </Section>
    </div>
  );
}
