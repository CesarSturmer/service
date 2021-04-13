import axios from 'axios'

const api = axios.create({
    baseURL: 'https://servicos-app.herokuapp.com'
})

export default api