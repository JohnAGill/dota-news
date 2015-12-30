import React, {Component} from 'react' // eslint-disable-line no-unused-vars

import actions from './actions'
import {connect} from 'react-redux'

@connect((state) => state.users, actions)
export default class Login extends Component {

  emailInput(event) {
    this.props.updateEmail(event.target.value)
  }

  passwordInput(event) {
    this.props.updatePassword(event.target.value)
  }

  handleClick(event) {
    this.props.signUp()
  }

  render() {
    if (this.props.loading) {
      return(<p>Loading!</p>)
    } else if (this.props.loggedIn) {
      return(<p>Logged In!</p>)
    }
    return(
      <div>
          <h3>Email</h3>
          <input onChange={(e) => this.emailInput(e)} className='email-input' value={this.props.email}></input>
          <h3>Password</h3>
          <input onChange={(e) => this.passwordInput(e)} type='password' className='password-input'></input>
          <button onClick={(e) => this.handleClick(e)} className='btn btn-primary'>Sign Up</button>
          {this.props.errorMessage ? <p>{this.props.errorMessage}</p> : null}
      </div>
    )
  }
}
