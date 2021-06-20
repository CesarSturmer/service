import { useEffect, useState } from 'react'
import Header from '../src/components/Header'
import LandingButton from '../src/components/LandingButton'
import api from './api'
import {PageContainer} from '../styles/serviceSearch'
import TexContainer from '../src/components/Utils/TexContainer'
import ButtonsContainer from '../src/components/Utils/ButtonsContainer'
import Footer from '../src/components/Footer'
import CircularProgress from '@material-ui/core/CircularProgress'

function Search() {
  const [categoryInfo, setCategoryInfo] = useState([])

  useEffect(() => {
    const getCategory = async () => {
      await api.get('categorias')
        .then((res) => {
          setCategoryInfo(res.data)
        })
        .catch(() => alert('falha!'))
    }
    getCategory()
  }, [])


  function getServiceIcons(categoria) {
    const ImageHouseMade = './Caseiro.svg'
    const ImageCleaning = './Cleaning_services.svg'
    const ImageChildren = './Criancas.svg'
    const ImageAnimals = './Animais.svg'
    const ImageSeniors = './Idosos.svg'
    const ImageElectrician = './Eletricista.svg'
    const ImageKitchen = './Cozinha.svg'
    const ImagePlumer = './Encanador.svg'
    const ImageGarden = './Jardim.svg'
    const ImageWoodWork = './Marcenaria.svg'
    const ImageConstruction = './Obras.svg'
    const ImageOtherServices = './Outros.svg'

    switch (categoria) {
      case 'Caseiro':
        return ImageHouseMade
      case 'Limpeza':
        return ImageCleaning
      case 'Crianças':
        return ImageChildren
      case 'Animais':
        return ImageAnimals
      case 'Idosos':
        return ImageSeniors
      case 'Elétrica':
        return ImageElectrician
      case 'Cozinha':
        return ImageKitchen
      case 'Encanamento':
        return ImagePlumer
      case 'Jardim':
        return ImageGarden
      case 'Mercearia':
        return ImageWoodWork
      case 'Obras':
        return ImageConstruction
      case 'Outros':
        return ImageOtherServices
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
        {categoryInfo.length !== 0 ?
          categoryInfo.map((item) => (
            <LandingButton
              key={item.id}
              imageSrc={getServiceIcons(item.categoria)}
              text={item.categoria}
              to={`service/${item.id}`}
              serviceButton
            />
          ))
        :
          <CircularProgress/>
        }
      </ButtonsContainer>
      <Footer />
    </>
  )
}

export default Search
