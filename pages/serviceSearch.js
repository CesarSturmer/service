import { useEffect, useState } from 'react'
import Header from '../src/components/Header'
import LandingButton from '../src/components/LandingButton'
import api from './api'
import styled from 'styled-components'
import TexContainer from '../src/components/Utils/TexContainer'
import ButtonsContainer from '../src/components/Utils/ButtonsContainer'
import Footer from '../src/components/Footer'

const PageContainer = styled.div`
  margin: 6rem 0 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media(min-width: 1025px) and (max-width: 1100px) {
    margin: 3rem 0 0 5rem;
  }  
  @media (min-width: 768px) and (max-width: 1024px) {
    margin: 4rem 0;
    justify-content: center;
    align-items: center;
  }  
  @media (min-width: 320px) and (max-width: 767px) {
    margin: 4rem 0;
    justify-content: center;
    align-items: center;
 
  }  

`;


function Search() {
  const [categoryInfo, setCategoryInfo] = useState([]);

  useEffect(() => {
    const getCategory = async () => {
      await api
        .get('categorias')
        .then((res) => {
          setCategoryInfo(res.data);
        })
        .catch(() => alert('falha!'));
    };
    getCategory();
  }, []);
  

  function getServiceIcons(categoria) {
    const ImageHouseMade = './Caseiro.svg';
    const ImageCleaning = './Cleaning_services.svg';
    const ImageChildren = './Criancas.svg';
    const ImageAnimals = './Animais.svg';
    const ImageSeniors = './Idosos.svg';
    const ImageElectrician = './Eletricista.svg';
    const ImageKitchen = './Cozinha.svg';
    const ImagePlumer = './Encanador.svg';
    const ImageGarden = './Jardim.svg';
    const ImageWoodWork = './Marcenaria.svg';
    const ImageConstruction = './Obras.svg';
    const ImageOtherServices = './Outros.svg';

    switch (categoria) {
      case 'Caseiro':
        return ImageHouseMade;
      case 'Limpeza':
        return ImageCleaning;
      case 'Crianças':
        return ImageChildren;
      case 'Animais':
        return ImageAnimals;
      case 'Idosos':
        return ImageSeniors;
      case 'Elétrica':
        return ImageElectrician;
      case 'Cozinha':
        return ImageKitchen;
      case 'Encanamento':
        return ImagePlumer;
      case 'Jardim':
        return ImageGarden;
      case 'Marcenaria':
        return ImageWoodWork;
      case 'Obras':
        return ImageConstruction;
      case 'Outros':
        return ImageOtherServices;
    }
  }

  return (
    <>
      <Header />
      <PageContainer>
        <TexContainer
          title={`Qual tipo de serviço você quer?`}
          subtitle={'Procurando alguém na sua região recomendado?'}
          secondTitle={'Buscando alguém bem recomendado?'}
        />
      </PageContainer>

      <ButtonsContainer>
        {categoryInfo.map((item) => (
          <LandingButton
            key={item.id}
            imageSrc={getServiceIcons(item.categoria)}
            text={item.categoria}
            to={`service/${item.id}`}
            serviceButton
          />
        ))}
      </ButtonsContainer>
      <Footer />
    </>
  );
}

export default Search;
