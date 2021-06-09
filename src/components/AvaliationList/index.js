import { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../../../pages/api';

const Container = styled.div`
    width: 50rem;
    color: ${({ theme }) => theme.colors.title};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`

const AvaliationBox = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0;
`

const Avaliation = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${({ theme }) => theme.colors.title};
`

const Button = styled.button`
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.title};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 0.5rem 2rem;
    margin-top: 1rem;
    align-self: flex-end;
`

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
            <h1>Avaliações</h1>
            <AvaliationBox>
                {avaliations.length !== 0 ?
                    avaliations.map((avaliation) => {
                        return (
                            <Avaliation>
                                <p>{avaliation.comentario}</p>
                                <p>{avaliation.nota}</p>
                            </Avaliation>
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