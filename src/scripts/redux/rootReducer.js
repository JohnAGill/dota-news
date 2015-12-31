
import { combineReducers } from 'redux'
import users from '../components/login/reducer'
import { routeReducer as router } from 'redux-simple-router'

const rootReducer = combineReducers({
  users,
  router
})

export default rootReducer
