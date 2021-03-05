import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://192.168.100.2:8080/'
})

export default instance