import types from '../_types'

import { loadTypeListRequest } from '../_api'

export const loadTypeList = () => async dispatch => {
    const response = await loadTypeListRequest()
    if (response.status === 200) {
        dispatch({ type: types.LOAD_TYPELIST_SUCCESS, payload: response.data })
    }
    else
        dispatch({ type: types.LOAD_TYPELIST_FAILURE, payload: response })
}
