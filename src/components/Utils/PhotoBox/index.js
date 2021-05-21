import styled from 'styled-components'
import {AiFillStar} from 'react-icons/ai'

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  width: 50rem;
  height: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5rem auto;
  border-radius: ${({ theme }) => theme.borderRadius.default};
`;

const TopContainer = styled.div`
    position: relative;
    top: -5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Photo = styled.img`
  width: 10rem;
  height: 10rem;
  border-radius: ${({ theme }) => theme.borderRadius.max};
`

const IconsContainer = styled.div`
    display: flex;
`

const PhotoBox = (props) => {
    return (
        <Box>
            <TopContainer>
                <Photo src='https://media-exp1.licdn.com/dms/image/C5603AQGukIMfUDJRpg/profile-displayphoto-shrink_400_400/0/1595376049871?e=1625702400&v=beta&t=IFIxV-PB6zDs9Fix0UvegxtNTVxP9HBFHJ_K7CZDSow' />
                <p>{props.name}</p>
                <IconsContainer>
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </IconsContainer>
            </TopContainer>
            {props.children}
        </Box>
    )
}

export default PhotoBox
