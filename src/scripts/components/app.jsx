import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'
import actions from '../redux/actions/users'

@connect((state) => state, actions)
export default class App extends Component {

  componentWillMount() {
    this.props.getUserAuthData()
  }

  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
