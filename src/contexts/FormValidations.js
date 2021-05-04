import {createContext} from 'react'

const FormValidations = createContext(
    {password:noValidation, cpf:noValidation, phone:noValidation}
)

function noValidation(data) {
    return {error:false, text: ''}
}

export default FormValidations