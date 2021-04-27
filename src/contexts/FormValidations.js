import {createContext} from 'react'

const FormValidations = createContext(
    {password:noValidation}
)

function noValidation(data) {
    return {error:false, text: ''}
}

export default FormValidations