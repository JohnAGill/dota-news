import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import actions from '../../redux/actions/createTrip'
import {connect} from 'react-redux'

@connect((state) => state.createTrip, actions)
export default class createTrip extends Component {

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

  seeTrips(event) {
    this.props.seeTrips()
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
        <button onClick={(e) => this.seeTrips(e)} className='btn btn-primary'>See trips</button>
        {this.props.saved ? <p>Saved {this.props.destination}</p> : null}
      </div>
    )
  }
}
