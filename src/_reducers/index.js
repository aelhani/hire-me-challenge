import { combineReducers } from 'redux'
import pokeListReducer from './pokeListReducer'
import pokeItemReducer from './pokeItemReducer'
import typeListReducer from './typeListReducer'

export default combineReducers({
    pokeListReducer: pokeListReducer,
    pokeItemReducer: pokeItemReducer,
    typeListReducer: typeListReducer,    
})
