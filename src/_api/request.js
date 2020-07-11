import axios from 'axios'

const baseURL = "https://pokeapi.co/api/v2/"

const request = axios.create({
    baseURL,
    timeout: 20000,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export default request