import React, {Component} from 'react' // eslint-disable-line no-unused-vars

import actions from './actions'
import {connect} from 'react-redux'

@connect((state) => state.users, actions)
export default class Jogs extends Component {


  render() {
    return(
      <div>
      </div>
    )
  }
}
