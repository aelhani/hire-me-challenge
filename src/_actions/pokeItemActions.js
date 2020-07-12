import types from '../_types'

import { loadPokeItemRequest } from '../_api'

export const loadPokeItem = (id) => async dispatch => {
    const response = await loadPokeItemRequest(id)
    if (response.status === 200) {
        dispatch({ type: types.LOAD_POKEITEM_SUCCESS, payload: response.data })
    }
    else
        dispatch({ type: types.LOAD_POKEITEM_FAILURE, payload: response })
}
