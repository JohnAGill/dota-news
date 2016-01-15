import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'

@connect((state) => state)
export default class Home extends Component {

  render() {
    return(
      <div>
        <p>Welcome to Dota News</p>
        <p>Coming soon</p>
      </div>)
  }
}
