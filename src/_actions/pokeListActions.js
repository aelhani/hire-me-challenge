import types from '../_types'

import { loadPokeListRequest, loadPokeListByTypeRequest } from '../_api'

export const loadPokeList = (limit, offset) => async dispatch => {
    const response = await loadPokeListRequest(limit, 20 * offset)
    if (response.status === 200) {
        dispatch({ type: types.LOAD_POKELIST_SUCCESS, payload: response.data })
    }
    else
        dispatch({ type: types.LOAD_POKELIST_FAILURE, payload: response })
}

export const loadPokeListByType = (type) => async dispatch => {
    const response = await loadPokeListByTypeRequest(type)
    if (response.status === 200) {
        dispatch({ type: types.LOAD_POKELISTBYTYPE_SUCCESS, payload: response.data })
    }
    else
        dispatch({ type: types.LOAD_POKELISTBYTYPE_FAILURE, payload: response })
}
