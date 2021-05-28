import styled from 'styled-components'
import PhotoBox from '../Utils/PhotoBox'

const UserInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
`

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
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