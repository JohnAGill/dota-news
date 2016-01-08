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

  render() {
    if (this.props.loading) {
      return (<i className='spinner'></i>)
    }
    return(
      <div className='container'>

        <div className='row'>
          <a className="btn btn-primary" href="#/trips/new" role="button">Add new trip</a>
          <button onClick={window.print} className='btn btn-primary delete-margin'>Print</button>
        </div>
        <div className='row'>
          <p className='col-md-1 filter-header'>Filter</p>
          <input onChange={(e) => this.props.updateFilter(e.target.value)} className='col-md-3 filter' />
        </div>
        <div>
           {
            _.map(this.props.visableTrips, (trip) =>
              (
                <div className='container'>
                  <ul className='list-padding'>
                    <li>Destination: {trip.destination}</li>
                    <li>Start Date: {trip.startDate}</li>
                    <li>End Date: {trip.endDate}</li>
                    <li>Comment: {trip.comment}</li>
                  </ul>
                  <button onClick={() => this.deleteTrip(trip)} className='btn btn-primary delete-margin'>Delete</button>
                  <a className="btn btn-primary" href={`#/trips/${trip.uid}/update`} role="button">Edit</a>
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
