import {ImWhatsapp} from 'react-icons/im'
import { useRouter } from 'next/router'
import api from '../../../pages/api'

const WhatsappIcon = ({phone, serviceId}) => {
    const router = useRouter()

    const handleWppClick = async () => {
        const token = sessionStorage.getItem('validated_token')
        api.defaults.headers.common['Authorization'] = 'Bearer ' + token
        api.post('avaliacao/libera', {
            servico: {
                id: serviceId
            },
            podeComentar: true
        })
        .then(() => router.push(`https://wa.me/${phone}`))
    }

    return (
        <ImWhatsapp onClick={handleWppClick} size={30} />
    )
}

export default WhatsappIcon