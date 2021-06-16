import {useState, useEffect} from 'react'
import styled from 'styled-components'
import AvaliationIcons from '../Utils/AvaliationIcons'
import { IoArrowBack } from 'react-icons/io5'
import {FaEdit} from 'react-icons/fa'
import api from '../../../pages/api'

const Box = styled.div`
    width: 50rem;
    color: ${({ theme }) => theme.colors.title};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    margin: 0 auto;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`

const BackContainer = styled.div`
    font-size: 1rem;
    cursor: pointer;
`

const Service = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const ServiceList = ({id, back}) => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const getServices = async () => {
            await api.get(`servicos?prestadorId=${id}`)
            .then((res) => setServices(res.data))
            .catch(() => alert('Falha ao listar serviços!'))
        }
        getServices()
    }, [])


    return (
        <Box>
            <BackContainer onClick={back}>
                <IoArrowBack />
            </BackContainer>
            <h1>Serviços cadastrados</h1>
            {services.length !== 0 &&
                services.map((service) => {
                    return (
                        <Service key={service.id}>
                            <p>{service.categoria.categoria}</p>
                            <p>{service.titulo}</p>
                            <AvaliationIcons avaliation={service.notaMedia}/>
                            <FaEdit />
                        </Service>
                    )
                })
            }
        </Box>
    )
}

export default ServiceList