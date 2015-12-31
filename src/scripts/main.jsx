// This puts a <style> tag in <head> of page with transpiled css.
import '../styles/main.scss'

// Import bootstrap (which requires jQuery)
import 'imports?jQuery=jquery!bootstrap-sass'

import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route } from 'react-router'
import { syncReduxAndRouter } from 'redux-simple-router'

import store from './redux/store'
import App from './components/app'
import Home from './components/Home/home'
import Login from './components/login/login'

// There are different types of history: https://github.com/rackt/react-router/blob/master/docs/guides/basics/Histories.md
const history = createBrowserHistory()

syncReduxAndRouter(history, store, (state) => state.router)

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="signin" component={Login} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('content')
)
