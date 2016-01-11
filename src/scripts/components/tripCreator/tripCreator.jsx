import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import DatePicker from 'react-datepicker'

export default class tripCreator extends Component {

  render() {
    console.log(this.props.trip.startDate)
    return(
      <div className='row input-padding'>
        <div className='row'>
          <p className='col-md-1'>Destination</p>
          <input onChange={(e) => this.props.updateDestination(e.target.value)} className='col-md-2' value={this.props.trip.destination} />
        </div>
        <div className='row'>
          <p className='col-md-1'>StartDate</p>
          <DatePicker placeholder='Select a date' selected={this.props.trip.startDate} onChange={(e) => this.props.updateStartDate(e)} />
        </div>
        <div className='row'>
          <p className='col-md-1'>EndDate</p>
          <DatePicker placeholder='Select a date' selected={this.props.trip.endDate} onChange={(e) => this.props.updateEndDate(e)} />
        </div>
        <div className='row'>
          <p className='col-md-1'>Comment</p>
          <input onChange={(e) => this.props.updateComment(e.target.value)} className='col-md-2' value={this.props.trip.comment} />
        </div>
      </div>
    )
  }
}
