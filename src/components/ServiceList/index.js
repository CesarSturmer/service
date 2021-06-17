import {useState, useEffect} from 'react'
import styled from 'styled-components'
import AvaliationIcons from '../Utils/AvaliationIcons'
import ServiceForm from '../ServiceForm'
import { IoArrowBack } from 'react-icons/io5'
import {FaEdit} from 'react-icons/fa'
import api from '../../../pages/api'

const Container = styled.div`
    width: 80%;
    color: ${({ theme }) => theme.colors.title};
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
`

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
`

const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: 30rem 30rem;
`

const ServiceBox = styled.div`
    width: 25rem;
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius.default};
    padding: 1rem;
    margin: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TopBoxContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`

const ServiceTitle = styled.h2`
    width: 100%;
    text-align: center;
`

const ServiceList = ({id, back}) => {
    const [services, setServices] = useState([])
    const [service, setService] = useState({})
    const [showForm, setShowForm] = useState(false)

    useEffect(() => {
        const getServices = async () => {
            await api.get(`servicos?prestadorId=${id}`)
            .then((res) => setServices(res.data))
            .catch(() => alert('Falha ao listar serviços!'))
        }
        getServices()
    }, [])

    const handleEditService = (service) => {
        setService(service)
        setShowForm(true)
    }


    return (
        <>
            {showForm ?
                <ServiceForm 
                    back={() => setShowForm(false)} 
                    service={service} 
                />
            :
                <Container>
                    <TitleContainer>
                        <IoArrowBack size={30} onClick={back} />
                        <h1>Serviços cadastrados</h1>
                    </TitleContainer>
                    <ServicesContainer>
                        {services.length !== 0 &&
                            services.map((service) => {
                                return (
                                    <ServiceBox key={service.id}>
                                        <TopBoxContainer>
                                            <ServiceTitle>{service.titulo}</ServiceTitle>
                                            <FaEdit onClick={() => handleEditService(service)}/>
                                        </TopBoxContainer>
                                        <p>{service.descricao}</p>
                                        <p>Categoria: {service.categoria.categoria}</p>
                                        <AvaliationIcons avaliation={service.notaMedia}/>
                                    </ServiceBox>
                                )
                            })
                        }
                    </ServicesContainer>
                </Container>
            }
        </>
    )
}

export default ServiceList