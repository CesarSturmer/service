import {useState, useContext} from 'react'
import {TextField} from '@material-ui/core'
import api from '../../../pages/api'
import FormValidations from '../../contexts/FormValidations'
import useError from '../../hooks/useError'
import FormContainer from '../Utils/FormContainer'

const ChangePassword = ({back}) => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPassworError, setConfirmPasswordError] = useState({error: false, text: ''})
    const validations = useContext(FormValidations)
    const [error, fieldValidator, canSend] = useError(validations)

    const editPassword = async () => {
        await api.put('usuario/senha', {
            novaSenha: newPassword,
            senhaAtual: oldPassword
        })
        .then(() => {
            alert('Senha alterada com sucesso')
            back
        })
        .catch(() => alert('Falha ao alterar senha'))
    }

    const confirmPasswordValidator = () => {
        newPassword === confirmPassword ?
            setConfirmPasswordError({error: false, text: ''})
        :
            setConfirmPasswordError({error: true, text: 'Senhas diferentes!'})
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if(canSend()) {
            editPassword()
        }
    }

    return (
        <FormContainer 
            back={back} 
            title='Alterar senha' 
            buttonText='Alterar'
            onSubmit={onSubmit}
        >
            <TextField
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                onBlur={fieldValidator}
                error={error.password.error}
                helperText={error.password.text}
                label='Senha atual'
                name='password'
                variant='outlined'
                size='small'
                type='password'
                margin='normal'
                required
                fullWidth
            />
            <TextField
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onBlur={fieldValidator}
                error={error.password.error}
                helperText={error.password.text}
                label='Nova senha'
                name='password'
                variant='outlined'
                size='small'
                type='password'
                margin='normal'
                required
                fullWidth
            />
            <TextField
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={confirmPasswordValidator}
                error={confirmPassworError.error}
                helperText={confirmPassworError.text}
                label='Confirma senha'
                name='confirmPassword'
                variant='outlined'
                size='small'
                type='password'
                margin='normal'
                required
                fullWidth
            />
        </FormContainer>
    )
}

export default ChangePassword