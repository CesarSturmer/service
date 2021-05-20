import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header';
import ServiceBox from '../../src/components/ServiceBox'
import ButtonsContainer from '../../src/components/Utils/ButtonsContainer'
import api from '../api';

export default function Service() {
    const router = useRouter()
    const { id } = router.query
    const [services, setServices] = useState([])

    useEffect(() => {
    const getServices = async () => {
        await api
        .get(`servicos?categoriaId=${id}`)
        .then((res) => {
            setServices(res.data)
            console.log(res.data)
        })
    };
    getServices()
    }, [])

  return (
    <div>
      <Header />
      {services.length >= 1 &&
        <ButtonsContainer>
            {services.map((service) => {
                return (
                    <ServiceBox 
                        title={service.titulo} 
                        serviceProvider={service.prestadorServico.nomeCompleto} 
                    />
                )
            })}
        </ButtonsContainer>
      }
    </div>
  );
}

export async function getServerSideProps() {
    return {
        props: {},
    };
}