import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'
import Navbar from './navbar/navbar'

@connect((state) => state)
export default class App extends Component {

  render() {
    return(
      <div className='border'>
        <Navbar />
        {this.props.children}
      </div>
    )
  }
}
