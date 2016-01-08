import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import actions from '../../redux/actions/trip'
import {connect} from 'react-redux'
import TripCreator from '../tripCreator/tripCreator'

@connect((state) => state.trip, actions)
export default class createTrip extends Component {
  render() {
    return(
      <div className='container'>
        <TripCreator trip={this.props.trip}
          updateDestination={this.props.updateDestination}
          updateStartDate={this.props.updateStartDate}
          updateEndDate={this.props.updateEndDate}
          updateComment={this.props.updateComment} />
        <button onClick={() => this.props.addTrip()} className='btn btn-primary'>Add</button>
        <a className='btn btn-primary' href='#/trips' role='button'>See Trips</a>
        {this.props.saved ? <p>Saved</p> : null}
      </div>
    )
  }
}
