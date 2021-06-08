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
    justify-content: space-around;
    padding: 1rem 0;
`

const Avaliation = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.colors.title};
    margin: 0 2rem;
`

const Button = styled.button`
    color: ${({ theme }) => theme.colors.secondary};
    border: 2px solid ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 0.5rem 2rem;
    margin-top: 1rem;
    align-self: flex-end;
`

const AvaliationList = ({serviceId}) => {
    const [avaliations, setAvaliations] = useState([])

    useEffect(() => {
        const getAvaliations = async () => {
            await api.get(`avaliacao/${serviceId}`)
            .then((res) => setAvaliations(res.data))
            .catch(() => alert('Não foi possível carregar as avaliações'))
            getAvaliations()
        }
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
            <Button>Avaliar serviço</Button>
        </Container>
    )
}

export default AvaliationList