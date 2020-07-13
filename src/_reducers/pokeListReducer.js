import types from '../_types'

const initialState = {
    data: null,
    message: ''
}

const pokeListReducer = (state = initialState, action) => {
    const newState = { ...state }

    switch (action.type) {
        case types.LOAD_POKELIST_SUCCESS: {
            newState.data = action.payload
            newState.message = 'Loading Succesful'
            return newState
        }
        case types.LOAD_POKELIST_FAILURE: {
            newState.data = null
            newState.message = 'Unknown Error'
            return newState
        }
        case types.LOAD_POKELISTBYTYPE_SUCCESS: {
            newState.data = action.payload.pokemon
            newState.message = 'Loading Succesful'
            return newState
        }
        case types.LOAD_POKELISTBYTYPE_FAILURE: {
            newState.data = null
            newState.message = 'Unknown Error'
            return newState
        }
        default: {
            return newState
        }
    }
}

export default pokeListReducer
