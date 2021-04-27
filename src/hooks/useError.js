import {useState} from 'react'

function createInitialState(validations) {
    const initialState = {}

    for(let field in validations) {
        initialState[field] = {error:false, text:''}
    }

    return initialState
}

function useError(validations) {
    const initialState = createInitialState(validations)

    const [error, setError] = useState(initialState)

    function fieldValidator(e) {
        const {name, value} = e.target
        const newState = {...error}
        newState[name] = validations[name](value)
        setError(newState)
    }

    function canSend() {
        for(let field in error) {
            if(error[field].error) {
                return false
            }
        }
        return true
    }

    return [error, fieldValidator, canSend]
}

export default useError