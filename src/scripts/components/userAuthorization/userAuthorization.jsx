import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'
import action from '../../redux/actions/users'

@connect((state) => state.users, action)
export default class UserAuthorization extends Component {
  componentWillMount() {
    if (!this.props.loggedIn) {
      this.props.redirectUnauthedUser()
    }
  }

  render() {
    return(this.props.children)
  }
}
