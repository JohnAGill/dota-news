
import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import trips from './reducers/trips'
import users from './reducers/users'
import createTrip from './reducers/createTrip'
import home from './reducers/home'

const rootReducer = combineReducers({
  users,
  router,
  trips,
  createTrip,
  home
})

export default rootReducer
