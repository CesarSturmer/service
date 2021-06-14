import {useState, useEffect} from 'react'
import styled from 'styled-components'
import AvaliationIcons from '../Utils/AvaliationIcons'
import api from '../../../pages/api'

const Box = styled.div`
    width: 50rem;
    color: ${({ theme }) => theme.colors.title};
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

const Service = styled.div`
    display: flex;
`

const ServiceList = ({id}) => {
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
            {services.length !== 0 &&
                services.map((service) => {
                    return (
                        <Service key={service.id}>
                            <p>{service.categoria.categoria}</p>
                            <p>{service.titulo}</p>
                            <AvaliationIcons avaliation={service.notaMedia}/>
                        </Service>
                    )
                })
            }
        </Box>
    )
}

export default ServiceList