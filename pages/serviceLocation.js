import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import Header from '../src/components/Header';
import Select from '../src/components/Utils/Select';
import api from './api';
import { MenuItem } from '@material-ui/core';
import {  MapContainer, Marker, Popup } from 'react-leaflet';

const CepCoords = require('coordenadas-do-cep');

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
  const [city, setCity] = useState([]);
  const [data, setData] = useState([]);
  const [latitude, setLatitude] = useState()
  const [longitude, setLongitude] = useState()
  const router = useRouter();

  const MapWithNoSSR = dynamic(() => import('../src/components/MapBox'), {
    ssr: false,
  });



  const {
    query: { id },
  } = router;

  useEffect(() => {
    const getStates = async () => {
      await api
        .get(`servicos?categoriaId=${id}`)

        .then((res) => setData(res.data))
    };
    getStates();
  }, []);


  CepCoords.getByCep('88062130')
    .then((info) => {
      setLatitude(info.lat)
      setLongitude (info.lon)
    })
    .catch((err) => {});

    console.log(latitude, longitude);


  useEffect(() => {
    const getCities = async () => {
      await api.get('cidades').then((res) => setCity(res.data));
    };
    getCities();   
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

ServiceLocation.getInitialProps = ({ query: { id } }) => {
  return { id };
};
