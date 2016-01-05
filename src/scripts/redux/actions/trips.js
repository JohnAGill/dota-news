import Firebase from 'firebase'

const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  addTrip() {
    return (dispatch, getState) => {
      const pushTrip = ref.child('Trips')
      const trip = getState().trips
      pushTrip.push({
        destination: trip.destination,
        startDate: trip.startDate,
        endDate: trip.endDate,
        comment: trip.comment
      }, (error) => {
        if (error) {
          dispatch({type: 'TRIP_ADDED_ERROR', payload: error})
        } else {
          dispatch({type: 'TRIP_ADDED_SUCCESS'})
        }
      })
      dispatch({type: 'TRIP_ADDED_REQUEST'})
    }
  },
  updateDestination(destination) {
    return {
      type: 'TRIP_UPDATE_DESTINATION',
      payload: destination
    }
  },
  updateStartDate(startDate) {
    return {
      type: 'TRIP_UPDATE_START_DATE',
      payload: startDate
    }
  },
  updateEndDate(endDate) {
    return {
      type: 'TRIP_UPDATE_END_DATE',
      payload: endDate
    }
  },
  updateComment(comment) {
    return {
      type: 'TRIP_UPDATE_COMMENT',
      payload: comment
    }
  }
}
