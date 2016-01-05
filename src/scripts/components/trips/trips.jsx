import React, {Component} from 'react' // eslint-disable-line no-unused-vars

import actions from '../../redux/actions/trips'
import {connect} from 'react-redux'

@connect((state) => state.trips, actions)
export default class Trips extends Component {

  destination(event) {
    this.props.updateDestination(event.target.value)
  }

  startDate(event) {
    this.props.updateStartDate(event.target.value)
  }

  endDate(event) {
    this.props.updateEndDate(event.target.value)
  }

  comment(event) {
    this.props.updateComment(event.target.value)
  }

  addTrip(event) {
    this.props.addTrip()
  }

  render() {
    return(
      <div className='container'>
        <div className='row input-padding'>
          <p className='col-md-1'>Destination</p>
          <input onChange={(e) => this.destination(e)} className='col-md-2' value={this.props.destination} />
          <p className='col-md-1'>StartDate</p>
          <input onChange={(e) => this.startDate(e)} className='col-md-2' value={this.props.startDate} />
          <p className='col-md-1'>EndDate</p>
          <input onChange={(e) => this.endDate(e)} className='col-md-2' value={this.props.endDate} />
          <p className='col-md-1'>Comment</p>
          <input onChange={(e) => this.comment(e)} className='col-md-2' value={this.props.comment} />
        </div>
        <button onClick={(e) => this.addTrip(e)} className='btn btn-primary'>Add</button>
        {this.props.saved ? <p>Saved {this.props.newTrip.destination}</p> : null}
      </div>
    )
  }
}
