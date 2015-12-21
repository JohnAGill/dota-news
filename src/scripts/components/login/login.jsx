import React, {Component} from 'react' // eslint-disable-line no-unused-vars

import Firebase from 'firebase'
const ref = new Firebase('https://toptal-project.firebaseio.com')
import actions from './actions'
import {connect} from 'react-redux'

@connect((state) => state, actions)
export default class Login extends Component {

  emailInput(event) {
    this.setState(
      {
        email: event.target.value,
      }
    )
  }

  passwordInput(event) {
    this.setState(
      {
        password: event.target.value,
      }
    )
  }

  handleClick(event) {
    ref.createUser({
      email: this.state.email,
      password: this.state.password
    }, (error, userData) => {
      if (error) {
        console.log('Error creating user:', error)
      } else {
        console.log('Successfully created user account with uid:', userData.uid)
      }
    })
  }

  render() {
    return(
      <div>
        <h3>Email</h3>
        <input onChange={this.emailInput} className='email-input'></input>
        <h3>Password</h3>
        <input onChange={this.passwordInput} type='password' className='password-input'></input>
        <button onClick={(e) => this.handleClick(e)} className='btn btn-primary'>Sign Up</button>
      </div>
    )
  }
}
