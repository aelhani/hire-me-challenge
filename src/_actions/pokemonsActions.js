import types from '../_types'

import { loadPokemonsRequest } from '../_api'

export const loadPokemons = (limit, offset) => async dispatch => {
    const response = await loadPokemonsRequest(limit, 20 * offset)
    if (response.status === 200) {
        dispatch({ type: types.LOAD_POKEMONS_SUCCESS, payload: response.data })
    }
    else
        dispatch({ type: types.LOAD_POKEMONS_FAILURE, payload: response })
}
