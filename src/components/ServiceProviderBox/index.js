import {DataContainer, UserInfoContainer, WppContainer} from './style'
import WhatsappIcon from '../WhatsappIcon'
import PhotoBox from '../Utils/PhotoBox'

const ServiceProviderBox = ({avaliation, provider, imageSrc, category, service, neighborhood, phone}) => {
    return (
        <PhotoBox avaliation={avaliation} name={provider} imageSrc={imageSrc}>
            <UserInfoContainer>
                <DataContainer>
                    <p>Categoria: {category}</p>
                    <p>Tipo de serviço: {service}</p>
                </DataContainer>
                <DataContainer>
                    <p>Bairro: {neighborhood}</p>
                    <WppContainer>
                        <WhatsappIcon phone={phone} />
                    </WppContainer>
                </DataContainer>
            </UserInfoContainer>
        </PhotoBox>
    )
}

export default ServiceProviderBox