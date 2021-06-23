import { useState, useEffect } from 'react'
import * as style from './style'
import AvaliationIcons from '../Utils/AvaliationIcons'
import api from 'pages/api'

const AvaliationList = ({serviceId, showForm}) => {
    const [avaliations, setAvaliations] = useState([])

    useEffect(() => {
        const getAvaliations = async () => {
            await api.get(`avaliacao?servicoId=${serviceId}`)
            .then((res) => setAvaliations(res.data))
            .catch(() => alert('Não foi possível carregar as avaliações'))
        }
        
        getAvaliations()
    }, [])

    const getAvaliationAccess = async () => {
        const token = sessionStorage.getItem('validated_token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
        await api.get(`avaliacao/libera?servicoId=${serviceId}`)
        .then(() => showForm())
        .catch(() => alert('Você não pode avaliar este serviço!'))
    }

    return (
        <style.Container>
            <style.Title>Avaliações</style.Title>
            <style.AvaliationBox>
                {avaliations.length !== 0 ?
                    avaliations.map((avaliation) => {
                        return (
                            <style.AvaliationContainer key={avaliation.id}>
                                <style.AvaliatorName>{avaliation.avaliador.nomeCompleto}</style.AvaliatorName>
                                <style.Avaliation>
                                    <style.TextAvaliation>{avaliation.comentario}</style.TextAvaliation>
                                    <AvaliationIcons avaliation={avaliation.nota}/>
                                </style.Avaliation>
                            </style.AvaliationContainer>
                        )
                    })
                :
                    <p>Esse serviço ainda não foi avaliado!</p>
                }
            </style.AvaliationBox>
            <style.Button onClick={getAvaliationAccess}>Avaliar serviço</style.Button>
        </style.Container>
    )
}

export default AvaliationList