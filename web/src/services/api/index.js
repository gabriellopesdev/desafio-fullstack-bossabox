import axios from 'axios'

const api = axios.create({
    baseURL:  'https://bossabox-vuttr-api.herokuapp.com/',
})

export default api