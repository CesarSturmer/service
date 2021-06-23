import {useState, useEffect} from 'react'
import AvaliationIcons from '../Utils/AvaliationIcons'
import ServiceForm from '../ServiceForm'
import { IoArrowBack } from 'react-icons/io5'
import {FaEdit} from 'react-icons/fa'
import * as style from './style'
import api from 'pages/api'

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
                <style.Container>
                    <style.TitleContainer>
                        <IoArrowBack size={30} onClick={back} />
                        <h1>Serviços cadastrados</h1>
                    </style.TitleContainer>
                    <style.ServicesContainer>
                        {services.length !== 0 &&
                            services.map((service) => {
                                return (
                                    <style.ServiceBox key={service.id}>
                                        <style.TopBoxContainer>
                                            <style.ServiceTitle>{service.titulo}</style.ServiceTitle>
                                            <FaEdit onClick={() => handleEditService(service)}/>
                                        </style.TopBoxContainer>
                                        <p>{service.descricao}</p>
                                        <p>Categoria: {service.categoria.categoria}</p>
                                        <AvaliationIcons avaliation={service.notaMedia}/>
                                    </style.ServiceBox>
                                )
                            })
                        }
                    </style.ServicesContainer>
                </style.Container>
            }
        </>
    )
}

export default ServiceList