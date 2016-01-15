import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'

@connect((state) => state)
export default class App extends Component {

  render() {
    return(
      <div>
        {this.props.children}
      </div>
    )
  }
}
