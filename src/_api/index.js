import request from './request'

export async function loadPokemons(limit, offset) {
    return await request.get(`/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => {
            return res
        })
        .catch(error => {
            return error.response.data
        })
}