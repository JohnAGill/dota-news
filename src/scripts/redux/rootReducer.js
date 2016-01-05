
import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import trips from './reducers/trips'
import users from './reducers/users'

const rootReducer = combineReducers({
  users,
  router,
  trips
})

export default rootReducer
