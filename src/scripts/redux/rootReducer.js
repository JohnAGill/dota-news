
import { combineReducers } from 'redux'
import { routeReducer as router } from 'redux-simple-router'
import stories from './reducers/stories'

const rootReducer = combineReducers({
  stories,
  router
})

export default rootReducer
