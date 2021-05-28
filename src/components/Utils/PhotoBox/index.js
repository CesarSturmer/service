import styled from 'styled-components'
import api from '../../../../pages/api'
import AvaliationIcons from '../AvaliationIcons'
import {FaUserCircle} from 'react-icons/fa'

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

const PhotInput = styled.input`
    display: none;
`

const InputLabel = styled.label`
    background-color: ${({ theme }) => theme.colors.secondary};
    width: 10rem;
    height: 10rem;
    border-radius: ${({ theme }) => theme.borderRadius.max};
    cursor: pointer;
`

const PhotoBox = (props) => {

    const PostImage = async (e) => {
        e.preventDefault()
        const token = sessionStorage.getItem('validated_token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
        await api.post('midia', e.target, {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'type': 'formData'
            }
        })
        .then(() => alert('Foto cadastrada com sucesso!'))
        .catch(() => alert('Falha ao cadastrar foto'))
    }

    return (
        <Box>
            <TopContainer>
                {props.imageSrc ?
                    <Photo src={props.imageSrc} />
                :
                    <>
                        <InputLabel htmlFor='midia'><FaUserCircle size='10rem' /></InputLabel>
                        <PhotInput type='file' id='midia' onChange={(e) => PostImage(e)} />
                    </>
                }
                <p>{props.name}</p>
                <AvaliationIcons avaliation={props.avaliation} />
            </TopContainer>
            {props.children}
        </Box>
    )
}

export default PhotoBox
