import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header';
import ServiceBox from '../../src/components/ServiceBox';
import ButtonsContainer from '../../src/components/Utils/ButtonsContainer';
import api from '../api';
import MapBox from '../../src/components/MapBox';
const CepCoords = require('coordenadas-do-cep');

export default function Service() {
  const router = useRouter();
  const { id } = router.query;
  const [services, setServices] = useState([]);
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [cep, setCep] = useState();

  useEffect(() => {
    const getServices = async () => {
      await api.get(`servicos?categoriaId=${id}`)
      .then((res) => 
        setServices(res.data));
    };
    getServices();
  }, []);

    //   services.map((serviceCep) => {
    //       const cepInfo = serviceCep.endereco

    //       console.log(cepInfo);

    //       setCep(cepInfo)
    //   })


  
    CepCoords.getByCep('88062130')
      .then((info) => {
        setLatitude(info.lat);        
        setLongitude(info.lon);
      })
      .catch((err) => {
        console.log('erro');
      });
  

  console.log(latitude);
  console.log(longitude);

  return (
    <div>
      <Header />

      {services.length >= 1 && (
        <div>
          {services.map((service) => {
           
           
           
            return (
              <>
                <MapBox latitude={latitude} longitude={longitude} />

                {/* <ServiceBox 
                        title={service.titulo} 
                        serviceProvider={service.prestadorServico.nomeCompleto} 
                    />

                    <h2>{service.titulo}</h2> */}
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: {},
  };
}
