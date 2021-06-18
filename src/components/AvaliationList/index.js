import { useState, useEffect } from 'react'
import * as style from './style'
import AvaliationIcons from '../Utils/AvaliationIcons'
import api from '../../../pages/api'

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
            <style.Button onClick={showForm}>Avaliar serviço</style.Button>
        </style.Container>
    )
}

export default AvaliationList