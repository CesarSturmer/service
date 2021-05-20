import styled from 'styled-components'

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
`

const ServiceBox = ({serviceProvider, title}) => {
    return (
        <Box>
            <Photo src='https://media-exp1.licdn.com/dms/image/C5603AQGukIMfUDJRpg/profile-displayphoto-shrink_400_400/0/1595376049871?e=1625702400&v=beta&t=IFIxV-PB6zDs9Fix0UvegxtNTVxP9HBFHJ_K7CZDSow' />
            <TextContainer>
                <Title>{serviceProvider}</Title>
                <p>{title}</p>
            </TextContainer>
        </Box>
    )
}

export default ServiceBox