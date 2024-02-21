import axios from 'axios'

const apiCliente = axios.create({
    baseURL: 'http://192.168.146.46:3333'
})

export default apiCliente