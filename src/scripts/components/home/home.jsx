import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import actions from '../../redux/actions/home'
import {connect} from 'react-redux'

@connect((state) => state.users, actions)
export default class Home extends Component {

  signUp(event) {
    this.props.signUp()
  }

  logIn(event) {
    this.props.logIn()
  }

  render() {
    return(
      <div>
        <button onClick={(e) => this.signUp(e)} className='btn btn-primary'>Sign Up</button>
        <button onClick={(e) => this.logIn(e)} className='btn btn-primary'>Log In</button>
      </div>)
  }
}
