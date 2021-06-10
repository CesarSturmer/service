import {DataContainer, UserInfoContainer} from './style'
import PhotoBox from '../Utils/PhotoBox'

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