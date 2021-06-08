import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Header from '../../src/components/Header';
import Footer from '../../src/components/Footer';
import ServiceProviderBox from '../../src/components/ServiceProviderBox';
import AvaliationList from '../../src/components/AvaliationList'
import api from '../api';

export default function ServiceDetails() {
    const router = useRouter()
    const { id } = router.query
    const [serviceDetails, setServiceDetails] = useState([])

    useEffect(() => {
        const getService = async () => {
            await api.get(`servicos/${id}`)
            .then((res) => setServiceDetails(res.data))
            .catch(() => alert('Não foi possível trazer as info'))
        }
        getService()
    }, [])

    return (
        <>
            <Header />
            {serviceDetails.length !== 0 &&
                <ServiceProviderBox
                    avaliation={serviceDetails.notaMedia}
                    provider={serviceDetails.prestadorServico.nomeCompleto}
                    imageSrc={serviceDetails.prestadorServico.midiaPath}
                    category={serviceDetails.categoria.categoria}
                    service={serviceDetails.titulo}
                    neighborhood={serviceDetails.prestadorServico.endereco.bairro}
                    price={10.50}
                />
            }
            <AvaliationList serviceId={id} />
            <Footer />
        </>
    )
}

export async function getServerSideProps() {
    return {
        props: {},
    };
}