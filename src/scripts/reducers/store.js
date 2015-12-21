
import { applyMiddleware, createStore } from 'redux'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk';

import rootReducer from './root'

const logger = createLogger()
const createStoreWithMiddleware = applyMiddleware(logger, thunk)(createStore);

export default createStoreWithMiddleware(rootReducer)
