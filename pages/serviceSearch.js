import { useEffect, useState } from 'react';
import Header from '../src/components/Header';
import LandingButton from '../src/components/LandingButton';
import api from './api';
import styled from 'styled-components';
import TexContainer from '../src/components/TexContainer';

const PageContainer = styled.div`
  width: 50%;
  margin: 6rem 0 0 10rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const ContainerButtons = styled.div`
  background: ${({ theme }) => theme.colors.backgroundWhite};
  border-radius: 6.25rem;
  width: 80%;
  margin: 10rem 0 0 10rem;
  display: flex;
  align-items: flex-start;
  flex-flow: row wrap;
`;
const ContainerButtonsCenter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 4rem;
  flex-wrap: wrap;
`;

function Search() {
  const [categoryInfo, setCategoryInfo] = useState([]);

  useEffect(() => {
    const getUserInfo = async () => {
      await api
        .get('categorias')
        .then((res) => {
          setCategoryInfo(res.data);
        })
        .catch(() => alert('falha!'));
    };
    getUserInfo();
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
        break;
      case 'Limpeza':
        return ImageCleaning;
        break;
      case 'Crianças':
        return ImageChildren;
        break;
      case 'Animais':
        return ImageAnimals;
        break;
      case 'Idosos':
        return ImageSeniors;
        break;
      case 'Elétrica':
        return ImageElectrician;
        break;
      case 'Cozinha':
        return ImageKitchen;
        break;
      case 'Encanamento':
        return ImagePlumer;
        break;
      case 'Jardim':
        return ImageGarden;
        break;
      case 'Marcenaria':
        return ImageWoodWork;
        break;
      case 'Obras':
        return ImageConstruction;
        break;
      case 'Outros Serviços':
        return ImageOtherServices;
        break;
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
          fontSizeTitle
        />
      </PageContainer>

      <ContainerButtons>
        <ContainerButtonsCenter>
          {categoryInfo.map((item) => (
            <LandingButton
              imageSrc={getServiceIcons(item.categoria)}
              text={item.categoria}
              to=""
              serviceButton
            />
          ))}
        </ContainerButtonsCenter>
      </ContainerButtons>
    </>
  );
}

export default Search;
