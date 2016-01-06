import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import _ from 'lodash'
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

  deleteTrip(trip) {
    this.props.deleteTrip(trip)
  }

  componentWillMount() {
    this.props.getTrips()
  }

  render() {
    return(
      <div>
        <div className='container'>
          <div className='row input-padding'>
            <p className='col-md-1'>Destination</p>
            <input onChange={(e) => this.destination(e)} className='col-md-2' value={this.props.newTrip.destination} />
            <p className='col-md-1'>StartDate</p>
            <input onChange={(e) => this.startDate(e)} className='col-md-2' value={this.props.newTrip.startDate} />
            <p className='col-md-1'>EndDate</p>
            <input onChange={(e) => this.endDate(e)} className='col-md-2' value={this.props.newTrip.endDate} />
            <p className='col-md-1'>Comment</p>
            <input onChange={(e) => this.comment(e)} className='col-md-2' value={this.props.newTrip.comment} />
          </div>
          <button onClick={(e) => this.addTrip(e)} className='btn btn-primary'>Add</button>
          {this.props.saved ? <p>Saved {this.props.newTrip.destination}</p> : null}
        </div>
        <div>
          {
            _.map(this.props.trips, (trip) =>
              (
                <div className='container'>
                  <ul className='list-padding'>
                    <li>Destination: {trip.destination}</li>
                    <li>Start Date: {trip.startDate}</li>
                    <li>End Date: {trip.endDate}</li>
                    <li>Comment: {trip.comment}</li>
                  </ul>
                  <button onClick={() => this.deleteTrip(trip)} className='btn btn-primary delete-margin'>Delete</button>
                </div>
              )
            )
          }
          {this.props.error ? <p>Error loading trips</p> : null}
        </div>
      </div>
    )
  }
}
