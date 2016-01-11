import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import DatePicker from 'react-datepicker'

export default class tripCreator extends Component {

  destination(event) {
    this.props.updateDestination(event.target.value)
  }

  endDate(event) {
    this.props.updateEndDate(event.format('l'))
  }

  comment(event) {
    this.props.updateComment(event.target.value)
  }

  render() {
    console.log(this.props.trip.startDate)
    return(
      <div className='row input-padding'>
        <div className='row'>
          <p className='col-md-1'>Destination</p>
          <input onChange={(e) => this.destination(e)} className='col-md-2' value={this.props.trip.destination} />
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
          <input onChange={(e) => this.comment(e)} className='col-md-2' value={this.props.trip.comment} />
        </div>
      </div>
    )
  }
}
