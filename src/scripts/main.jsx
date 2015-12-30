// This puts a <style> tag in <head> of page with transpiled css.
import '../styles/main.scss'

// Import bootstrap (which requires jQuery)
import 'imports?jQuery=jquery!bootstrap-sass'

import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import App from './components/app'
import { Provider } from 'react-redux'
import store from './reducers/store'
import { Router, Route } from 'react-router'

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('content'))

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
    </Route>
  </Router>
), document.body)
