import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import actions from '../../redux/actions/trip'
import {connect} from 'react-redux'
import TripCreator from '../tripCreator/tripCreator'

@connect((state) => state.trip, actions)
export default class createTrip extends Component {

  addTrip(event) {
    this.props.addTrip()
  }

  seeTrips(event) {
    this.props.seeTrips()
  }

  render() {
    return(
      <div className='container'>
        <TripCreator trip={this.props.trip}
        updateDestination={this.props.updateDestination}
        updateStartDate={this.props.updateStartDate}
        updateEndDate={this.props.updateEndDate}
        updateComment={this.props.updateComment} />
        <button onClick={(e) => this.addTrip(e)} className='btn btn-primary'>Add</button>
        <a className='btn btn-primary' href='#/trips' role='button'>See Trips</a>
        {this.props.saved ? <p>Saved {this.props.destination}</p> : null}
      </div>
    )
  }
}
