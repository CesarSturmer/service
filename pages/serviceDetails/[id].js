import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import CircularProgress from '@material-ui/core/CircularProgress'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import ServiceProviderBox from '../../src/components/ServiceProviderBox'
import AvaliationList from '../../src/components/AvaliationList'
import AvaliationForm from '../../src/components/AvaliationForm'
import api from '../api'

export default function ServiceDetails() {
  const router = useRouter()
  const { id } = router.query
  const [serviceDetails, setServiceDetails] = useState([])
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    const getService = async () => {
      await api
        .get(`servicos/${id}`)
        .then((res) => setServiceDetails(res.data))
        .catch(() => alert('Não foi possível trazer as info'))
    }
    getService()
  }, [])

  const openForm = () => {
    if (sessionStorage.getItem('session_active')) {
      setShowForm(true)
    } else {
      alert('Você precisa estar logado para avaliar este serviço!')
    }
  }


  return (
    <>
      <Header />
      {serviceDetails.length !== 0 ? (
        <ServiceProviderBox
          serviceId={serviceDetails.id}
          avaliation={serviceDetails.notaMedia}
          provider={serviceDetails.prestadorServico.nomeCompleto}
          imageSrc={serviceDetails.prestadorServico.midiaPath}
          category={serviceDetails.categoria.categoria}
          service={serviceDetails.titulo}
          neighborhood={serviceDetails.prestadorServico.endereco.bairro}
          phone={`55${serviceDetails.prestadorServico.telefone}`}
        />
      ) : (
        <CircularProgress style={{ marginLeft: '50%' }} />
      )}
      {!showForm ? (
        <AvaliationList serviceId={id} showForm={openForm} />
      ) : (
        <AvaliationForm serviceId={id} back={() => setShowForm(false)} />
      )}
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  return {
    props: {},
  }
}
