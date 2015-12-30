// This puts a <style> tag in <head> of page with transpiled css.
import '../styles/main.scss'

// Import bootstrap (which requires jQuery)
import 'imports?jQuery=jquery!bootstrap-sass'

import React from 'react' // eslint-disable-line no-unused-vars
import ReactDOM from 'react-dom'
import App from './components/app'
import Home from './components/Home/home'
import Login from './components/login/login'

// import { Provider } from 'react-redux'
/* import store from './reducers/store'*/
import { Router, Route, IndexRoute } from 'react-router'

ReactDOM.render(<Router>
                  <Route path="/" component={App}>
                    <IndexRoute component={Home}/>
                    <Route path="/" component={Home} />
                    <Route path="signin" component={Login} />
                  </Route>
                </Router>, document.getElementById('content'))
