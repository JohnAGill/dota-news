
import { combineReducers } from 'redux'
import users from '../components/login/reducer'
import { routeReducer as router } from 'redux-simple-router'
import jogs from '../components/jogs/reducer'

const rootReducer = combineReducers({
  users,
  router,
  jogs
})

export default rootReducer
