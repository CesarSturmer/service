import styled from 'styled-components'
import {useRouter} from 'next/router'
import api from '../../../../pages/api'
import AvaliationIcons from '../AvaliationIcons'
import {FaUserCircle} from 'react-icons/fa'
import {MdAddAPhoto} from 'react-icons/md'

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
`

const EditInputLabel = styled.label`
    height: 10rem;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const LabelText = styled.p`
    margin: 0;
`

const PhotoBox = (props) => {
    const router = useRouter()

    if (typeof window !== 'undefined') {
        const token = sessionStorage.getItem('validated_token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
    }

    const postImage = async (e) => {
        e.preventDefault()
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

    const editImage = async (e) => {
        e.preventDefault()
        let formData = new FormData()
        let image = e.target.files[0]
        formData.append('midia', image)
        await api.post('midia', formData)
        .then(() => {
            alert('Foto editada com sucesso!')
            router.reload()
        })
        .catch(() => alert('Falha ao editar foto'))
    }

    return (
        <Box>
            <TopContainer>
                {props.imageSrc ?
                    <>
                        <Photo src={`https://servicos-app.herokuapp.com/${props.imageSrc}`} />
                        <EditInputLabel htmlFor='image'>
                            <MdAddAPhoto />
                            <LabelText>Editar foto</LabelText>
                        </EditInputLabel>
                        <PhotInput type='file' id='image' onChange={editImage} />
                    </>
                :
                    <>
                        <InputLabel htmlFor='midia'><FaUserCircle size='10rem' /></InputLabel>
                        <PhotInput type='file' id='midia' onChange={postImage} />
                    </>
                }
                <p>{props.name}</p>
                {props.avaliation &&
                    <AvaliationIcons avaliation={props.avaliation} />
                }
            </TopContainer>
            {props.children}
        </Box>
    )
}

export default PhotoBox
