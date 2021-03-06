import types from '../_types'

const initialState = {
    data: null,
    message: ''
}

const pokeItemReducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case types.LOAD_POKEITEM_SUCCESS: {
            newState.data = action.payload
            newState.message = 'Loading Succesful'
            return newState
        }
        case types.LOAD_POKEITEM_FAILURE: {
            newState.data = null
            newState.message = 'Unknown Error'
            return newState
        }
        default: {
            return newState
        }
    }
}

export default pokeItemReducer
