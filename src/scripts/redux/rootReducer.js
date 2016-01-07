
import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import trips from './reducers/trips'
import users from './reducers/users'
import trip from './reducers/trip'

const rootReducer = combineReducers({
  users,
  router,
  trips,
  trip
})

export default rootReducer
