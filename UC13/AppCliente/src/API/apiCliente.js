




import axios from 'axios'

const apiCliente = axios.create({
    baseURL: 'http://10.10.10.34:3333'
})

export default apiCliente