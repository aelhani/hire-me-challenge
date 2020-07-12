import types from '../_types'

const initialState = {
    data: null,
    message: ''
}

const typeListReducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case types.LOAD_TYPELIST_SUCCESS: {
            newState.data = action.payload
            newState.message = 'Loading Succesful'
            return newState
        }
        case types.LOAD_TYPELIST_FAILURE: {
            newState.data = null
            newState.message = 'Unknown Error'
            return newState
        }
        default: {
            return newState
        }
    }
}

export default typeListReducer
