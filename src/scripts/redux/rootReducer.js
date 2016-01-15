
import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import users from './reducers/users'

const rootReducer = combineReducers({
  users,
  router
})

export default rootReducer
