import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'

import rootReducer from './rootReducer'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore)

const store = createStoreWithMiddleware(rootReducer)

export default store
