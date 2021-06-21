import {useState} from 'react'
import {useRouter} from 'next/router'
import api from '../../../../pages/api'
import * as style from './style'
import AvaliationIcons from '../AvaliationIcons'
import {FaUserCircle} from 'react-icons/fa'
import {MdAddAPhoto, MdAdd, MdExpandLess, MdExpandMore, MdDelete} from 'react-icons/md'
import ModalServiceProviderActions from '../../ModalServiceProviderActions'

const PhotoBox = (props) => {
    const router = useRouter()
    const [open, setOpen] = useState(false)

    const renderExpandIcon = () => {
        if (open) {
            return <MdExpandLess size='2rem' />
        }

        return <MdExpandMore size='2rem' />
    }

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
        <style.Box>
            <style.TopContainer>
                {props.imageSrc ?
                    <>
                        <style.Photo src={`https://servicos-app.herokuapp.com/${props.imageSrc}`} />
                        {props.edit &&
                            <>
                                <style.IconsContainer onClick={() => setOpen(!open)}>
                                    {props.serviceProvider ?
                                        <>
                                            <style.AddContainer>
                                                <MdAdd size='2rem' />
                                                {renderExpandIcon()}
                                            </style.AddContainer>
                                            {open && 
                                                <ModalServiceProviderActions 
                                                    openServiceList={props.openServiceList} 
                                                    openServiceForm={props.openServiceForm} 
                                                    deleteAccount={props.deleteAccount}
                                                />
                                            }

                                        </>
                                    :
                                        <style.DeleteContainer>
                                            <MdDelete />
                                            <p>Apagar conta</p>
                                        </style.DeleteContainer>}
                                </style.IconsContainer>
                                <style.EditInputLabel htmlFor='image'>
                                    <MdAddAPhoto />
                                    <style.LabelText>Editar foto</style.LabelText>
                                </style.EditInputLabel>
                                <style.PhotInput type='file' id='image' onChange={editImage} />
                            </>
                        }
                    </>
                :
                    <>
                        <style.InputLabel htmlFor='midia'><FaUserCircle size='10rem' /></style.InputLabel>
                        <style.PhotInput type='file' id='midia' onChange={postImage} />
                    </>
                }
                <p>{props.name}</p>
                {!props.edit &&
                    <AvaliationIcons avaliation={props.avaliation} />
                }
            </style.TopContainer>
            {props.children}
        </style.Box>
    )
}

export default PhotoBox
