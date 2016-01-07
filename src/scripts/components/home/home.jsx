import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'

@connect((state) => state.users)
export default class Home extends Component {

  render() {
    return(
      <div>
        <a className='btn btn-primary' href='#/signup' role='button'>Sign Up</a>
        <a className='btn btn-primary' href='#/login' role='button'>Log In</a>
      </div>)
  }
}
