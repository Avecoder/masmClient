import axios from 'axios'
import { baseURL } from './utils'


const instance = axios.create({
  baseURL
})


instance.interceptors.request.use((config) => {
  config.headers.Authorization = document.cookie.split('=')[1]

  return config
})

export default instance
