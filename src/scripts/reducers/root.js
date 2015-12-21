
import { combineReducers, createStore } from 'redux'
import users from '../components/login/reducer'

const rootReducer = combineReducers({
  users
})

const store = createStore(rootReducer, {})

export default store
