import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import actions from '../../redux/actions/trip'
import {connect} from 'react-redux'
import TripCreator from '../tripCreator/tripCreator'

@connect((state) => state.trip, actions)
export default class EditTrip extends Component {

  componentWillMount() {
    this.props.getTrip(this.props.params.uid)
  }

  updateTrip() {
    this.props.updateTrip(this.props.trip, this.props.params.uid)
  }

  render() {
    if (this.props.loading) {
      return (<i className='spinner'></i>)
    }
    return(
      <div className='container'>
        <TripCreator trip={this.props.trip}
          updateDestination={this.props.updateDestination}
          updateStartDate={this.props.updateStartDate}
          updateEndDate={this.props.updateEndDate}
          updateComment={this.props.updateComment}
          destination={this.props.destination}/>
        <button onClick={(e) => this.updateTrip(e)} className='btn btn-primary'>Update</button>
        <a className='btn btn-primary' href='#/trips' role='button'>cancel</a>
      </div>
      )
  }
}
