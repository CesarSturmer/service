import Link from 'next/link'
import {ImWhatsapp} from 'react-icons/im'

const WhatsappIcon = (phone) => {
    return (
        <Link href={`https://wa.me/${phone}`}>
            <ImWhatsapp size={30} />
        </Link>
    )
}

export default WhatsappIcon