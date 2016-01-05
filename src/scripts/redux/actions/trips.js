import Firebase from 'firebase'
// import { pushPath } from 'redux-simple-router'

const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  addTrip() {
    return (dispatch, getState) => {
      const pushTrip = ref.child('Trips')
      pushTrip.push({
        destination: getState().trips.destination,
        startDate: getState().trips.startDate,
        endDate: getState().trips.endDate,
        comment: getState().trips.comment
      })
      dispatch({type: 'ADDED_TRIP'})
    }
  },
  updateDestination(destination) {
    return {
      type: 'UPDATE_DESTINATION',
      payload: destination
    }
  },
  updateStartDate(startDate) {
    return {
      type: 'UPDATE_START_DATE',
      payload: startDate
    }
  },
  updateEndDate(endDate) {
    return {
      type: 'UPDATE_END_DATE',
      payload: endDate
    }
  },
  updateComment(comment) {
    return {
      type: 'UPDATE_COMMENT',
      payload: comment
    }
  }
}
