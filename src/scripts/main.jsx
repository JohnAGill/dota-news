// This puts a <style> tag in <head> of page with transpiled css.
import '../styles/main.scss'
import './googleAnalytics.js'

// Import bootstrap (which requires jQuery)
import 'imports?jQuery=jquery!bootstrap-sass'

import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createHashHistory } from 'history'
import { Router } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'

import store from './redux/store'
import routes from './routes'

// There are different types of history: https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md
const history = createHashHistory({queryKey: false})

syncReduxAndRouter(history, store, (state) => state.router)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('content')
)
