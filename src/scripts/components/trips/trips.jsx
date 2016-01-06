import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import _ from 'lodash'
import actions from '../../redux/actions/trips'
import {connect} from 'react-redux'

@connect((state) => state.trips, actions)
export default class Trips extends Component {

  deleteTrip(trip) {
    this.props.deleteTrip(trip)
  }

  componentWillMount() {
    this.props.getTrips()
  }

  addTrip() {
    this.props.addTrip()
  }

  render() {
    return(
      <div>
        <button onClick={(e) => this.addTrip(e)} className='btn btn-primary'>Add new trip</button>
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
