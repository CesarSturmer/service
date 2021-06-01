import styled from 'styled-components'
import {useRouter} from 'next/router'
import api from '../../../../pages/api'
import AvaliationIcons from '../AvaliationIcons'
import {FaUserCircle} from 'react-icons/fa'

const Box = styled.div`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.title};
  width: 50rem;
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
    const router = useRouter()

    const PostImage = async (e) => {
        const token = sessionStorage.getItem('validated_token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
        let formData = new FormData()
        let midia = e.target.files[0]
        formData.append('midia', midia)
        await api.post('midia', formData)
        .then(() => {
            alert('Foto cadastrada com sucesso!')
            router.reload()
        })
        .catch(() => alert('Falha ao cadastrar foto'))
    }

    return (
        <Box>
            <TopContainer>
                {props.imageSrc ?
                    <Photo src={`https://servicos-app.herokuapp.com/${props.imageSrc}`} />
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
