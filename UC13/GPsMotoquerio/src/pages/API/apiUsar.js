import axios from 'axios'

const apiUsar = axios.create({
    baseURL: 'http://10.10.10.33:3333'
})

export default apiUsar