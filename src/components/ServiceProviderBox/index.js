import styled from 'styled-components'
import PhotoBox from '../Utils/PhotoBox'

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;

  @media (min-width: 479px) and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    align-items: flex-start;
    flex-direction: column;
    width: auto;
    padding-left: 0.625rem;
  }
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 479px) and (max-width: 767px) {
    width: 100%;
    align-items: center;
  }
  @media (min-width: 320px) and (max-width: 479px) {
    align-items: flex-start;
  }
`

const ServiceProviderBox = ({avaliation, provider, imageSrc, category, service, neighborhood, price}) => {
    return (
        <PhotoBox avaliation={avaliation} name={provider} imageSrc={imageSrc}>
            <UserInfoContainer>
                <DataContainer>
                    <p>Categoria: {category}</p>
                    <p>Tipo de serviço: {service}</p>
                </DataContainer>
                <DataContainer>
                    <p>Bairro: {neighborhood}</p>
                    <p>Preço: R${price}</p>
                </DataContainer>
            </UserInfoContainer>
        </PhotoBox>
    )
}

export default ServiceProviderBox