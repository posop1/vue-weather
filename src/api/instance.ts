import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  headers: {
    accept: 'application/json'
  }
})

api.interceptors.request.use((config) => {
  config.params.appid = 'ffae1cfd3f9b0d3b0c574eacf2702d6a'

  return config
})

export default api
