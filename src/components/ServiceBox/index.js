import Link from 'next/link'
import {Box, Photo, TextContainer, Title} from './style'
import AvaliationIcons from '../Utils/AvaliationIcons'
import {FaUserCircle} from 'react-icons/fa'

const ServiceBox = ({to, serviceProvider, title, avaliation, imageSrc}) => {
    return (
        <Link href={to}>
            <Box>
                {imageSrc ?
                    <Photo src={`https://servicos-app.herokuapp.com/${imageSrc}`} />
                :
                    <FaUserCircle size='6rem' />
                }
                <TextContainer>
                    <Title>{serviceProvider}</Title>
                    <p>{title}</p>
                    <AvaliationIcons avaliation={avaliation} />
                </TextContainer>
            </Box>
        </Link>
    )
}

export default ServiceBox
