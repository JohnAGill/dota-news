
import { combineReducers } from 'redux'
import users from '../components/login/reducer'
import jogs from '../components/jogs/reducer'

const rootReducer = combineReducers({
  users,
  jogs
})

export default rootReducer
