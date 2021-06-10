import {useState} from 'react'
import {useRouter} from 'next/router'
import styled from 'styled-components'
import {TextField} from '@material-ui/core'
import {ImStarFull, ImStarEmpty} from 'react-icons/im'
import api from '../../../pages/api'
import FormContainer from '../Utils/FormContainer'

const IconsContainer = styled.div`
    display: flex;
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
`

const AvaliationForm = ({back, serviceId}) => {
    const router = useRouter()
    const [comment, setComment] = useState('')
    const [grade, setGrade] = useState(0)

    const renderIcon = (position) => {
        const onClick = () => setGrade(position)
        if (grade >= position) {
            return <ImStarFull onClick={onClick} />
        }
        return <ImStarEmpty onClick={onClick} />
    }

    const postAvaliation = async (e) => {
        e.preventDefault()
        await api.post(`avaliacao/${serviceId}`, {
            comentario: comment,
            nota: grade
        })
        .then(() => {
            alert('Serviço avaliado!')
            router.reload()
        })
        .catch(() => alert('Falha ao avaliar serviço!'))
    }

    return (
        <FormContainer
            onSubmit={postAvaliation}
            back={back}
            title='Avalie este serviço'
            buttonText='Avaliar'
        >
            <TextField
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                label='Comentário'
                variant='outlined'
                size='small'
                type='text'
                margin='normal'
                fullWidth
                required
            />
            <IconsContainer>
                {renderIcon(1)}
                {renderIcon(2)}
                {renderIcon(3)}
                {renderIcon(4)}
                {renderIcon(5)}
            </IconsContainer>
        </FormContainer>
    )
}

export default AvaliationForm