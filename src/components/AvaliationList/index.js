import { useState, useEffect } from 'react'
import { Container, Title, AvaliationBox, AvaliationContainer, AvaliatorName, Avaliation, Button, TextAvaliation } from './style'
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
        <Container>
            <Title>Avaliações</Title>
            <AvaliationBox>
                {avaliations.length !== 0 ?
                    avaliations.map((avaliation) => {
                        return (
                            <AvaliationContainer key={avaliation.id}>
                                <AvaliatorName>{avaliation.avaliador.nomeCompleto}</AvaliatorName>
                                <Avaliation>
                                    <TextAvaliation>{avaliation.comentario}</TextAvaliation>
                                    <TextAvaliation>{avaliation.nota}</TextAvaliation>
                                </Avaliation>
                            </AvaliationContainer>
                        )
                    })
                :
                    <p>Esse serviço ainda não foi avaliado!</p>
                }
            </AvaliationBox>
            <Button onClick={showForm}>Avaliar serviço</Button>
        </Container>
    )
}

export default AvaliationList