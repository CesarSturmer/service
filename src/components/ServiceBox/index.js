import styled from 'styled-components'
import AvaliationIcons from '../Utils/AvaliationIcons'
import {FaUserCircle} from 'react-icons/fa'

const Box = styled.div`
    width: 22rem;
    display: flex;
    align-items: center;
    padding: 1rem;
    margin: 2rem 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    border-radius: ${({ theme }) => theme.borderRadius.default};
`

const Photo = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: ${({ theme }) => theme.borderRadius.max};
`

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
`

const Title = styled.p`
    font-weight: bold;
    margin: 0;
`

const ServiceBox = ({serviceProvider, title, avaliation, imageSrc}) => {
    return (
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
    )
}

export default ServiceBox