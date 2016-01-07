import React, {Component} from 'react' // eslint-disable-line no-unused-vars

export default class tripCreator extends Component {

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

  render() {
    return(
      <div className='row input-padding'>
        <p className='col-md-1'>Destination</p>
        <input onChange={(e) => this.destination(e)} className='col-md-2' value={this.props.trip.destination} />
        <p className='col-md-1'>StartDate</p>
        <input onChange={(e) => this.startDate(e)} className='col-md-2' value={this.props.trip.startDate} />
        <p className='col-md-1'>EndDate</p>
        <input onChange={(e) => this.endDate(e)} className='col-md-2' value={this.props.trip.endDate} />
        <p className='col-md-1'>Comment</p>
        <input onChange={(e) => this.comment(e)} className='col-md-2' value={this.props.trip.comment} />
      </div>
    )
  }
}
