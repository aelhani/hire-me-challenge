import { combineReducers } from 'redux'
import pokeListReducer from './pokeListReducer'
import pokeItemReducer from './pokeItemReducer'

export default combineReducers({
    pokeListReducer: pokeListReducer,
    pokeItemReducer: pokeItemReducer,
})
