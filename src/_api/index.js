import request from './request'

export async function loadPokeListRequest(limit, offset) {
    return await request.get(`/pokemon?limit=${limit}&offset=${offset}`)
        .then(res => {
            return res
        })
        .catch(error => {
            return error.response.data
        })
}

export async function loadPokeItemRequest(id) {
    return await request.get(`/pokemon/${id}`)
        .then(res => {
            return res
        })
        .catch(error => {
            return error.response.data
        })
}

export async function loadTypeListRequest() {
    return await request.get(`/type`)
        .then(res => {
            return res
        })
        .catch(error => {
            return error.response.data
        })
}

export async function loadPokeListByTypeRequest(id) {
    return await request.get(`/type/${id}`)
        .then(res => {
            return res
        })
        .catch(error => {
            return error.response.data
        })
}
