
import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import jogs from '../components/jogs/reducer'
import users from './reducers/users'

const rootReducer = combineReducers({
  users,
  router,
  jogs
})

export default rootReducer
