import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header';
import ServiceBox from '../../src/components/ServiceBox';
import ButtonsContainer from '../../src/components/Utils/ButtonsContainer';
import api from '../api';
import MapBox from '../../src/components/MapBox';
import Footer from '../../src/components/Footer';
import ServiceProviderBox from '../../src/components/ServiceProviderBox';
const CepCoords = require('coordenadas-do-cep');
import styled from 'styled-components';

const ContainerInfo = styled.div`
  width: auto;
  z-index: 1;
  position: relative;
  top: -250px;

  @media (min-width: 768px) and (max-width: 1024px) {
   
  }
`;


export default function Service() {
  const router = useRouter();
  const { id } = router.query;
  const [services, setServices] = useState([]);
  const [coordinates, setCordinates] = useState([]);
  const [viewProvider, setViewProvider] = useState(false);

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
            .catch((err) => {
              console.log('erro');
            });
        });
      });
    };
    getServices();
  }, []);

  const serviceInfo = () => setViewProvider(!viewProvider);

  return (
    <div onClick={() => console.log(coordinates)}>
      <Header />
      {services.length >= 1 ? (
        <>
          <MapBox coordinates={coordinates} onClick={serviceInfo} />

          {viewProvider ? (
            services.map((infoService) => {
              return (
                <ContainerInfo>
                  <ServiceProviderBox
                    avaliation={3}
                    provider={infoService.prestadorServico.nomeCompleto}
                    imageSrc={infoService.prestadorServico.midiaPath}
                    category={infoService.categoria.categoria}
                    service={infoService.descricao}
                    neighborhood="teste"
                    price="R$ 20,00"
                  />
                </ContainerInfo>
              );
            })
          ) : (
            <ButtonsContainer>
              {services.map((service) => {
                return (
                  <ServiceBox
                    key={service.id}
                    title={service.titulo}
                    serviceProvider={service.prestadorServico.nomeCompleto}
                    avaliation={4}
                    imageSrc={service.prestadorServico.midiaPath}
                  />
                );
              })}
            </ButtonsContainer>
          )}

          <Footer />
        </>
      ) : (
        <h1>Nenhum serviço cadastrado nessa categoria!</h1>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
