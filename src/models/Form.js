function passwordValidator(password) {
    console.log('função chamada')
    if(password.length < 8) {
        return {error: true, text: 'Senha deve conter no mínimo 8 caracteres'}
    } else {
        return {error: false, text: ''}
    }
}

export {passwordValidator}