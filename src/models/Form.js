import {cpf} from 'cpf-cnpj-validator'

const passwordValidator = (password) => {
    if(password.length < 8) {
        return {error: true, text: 'Senha deve conter no mínimo 8 caracteres'}
    } else {
        return {error: false, text: ''}
    }
}

const cpfValidator = (formCpf) => {
    if(!cpf.isValid(formCpf)) {
        return {error: true, text: 'CPF inválido'}
    } else {
        return {error: false, text: ''}
    }
}

const phoneValidator = (phone) => {
    if(phone.length !== 11) {
        return {error: true, text: 'Telefone deve conter 11 caracteres'}
    } else {
        return {error: false, text: ''}
    }
}

export {passwordValidator, phoneValidator, cpfValidator}