import Firebase from 'firebase'
import _ from 'lodash'

const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  addTrip() {
    return (dispatch, getState) => {
      const pushTrip = ref.child('trips')
      const trip = getState().trips.newTrip
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
  },
  getTrips() {
    return (dispatch) => {
      ref.on('value', (snapshot) => {
        const trips = (snapshot.val())
        dispatch({type: 'TRIP_LOAD_SUCCESS', payload: _.map(trips.trips, (trip, uid) => ({...trip, uid: uid}))})
      }, (errorObject) => {
        console.log(`The read failed: ${errorObject.code}`)
      })
    }
  }
}
