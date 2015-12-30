import React from 'react'
import Login from './login/login'
import { Link } from 'react-router'

const App = React.createClass({
  render() {
    return(
      <Link to='/killme'>
        <Login />
      </Link>
    )
  }
})
module.exports = App

