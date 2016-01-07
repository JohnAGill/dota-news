import Firebase from 'firebase'
import { pushPath } from 'redux-simple-router'

const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  addTrip() {
    return (dispatch, getState) => {
      const trips = ref.child('trips')
      const trip = getState().trip.trip
      trips.push(trip, (error) => {
        if (error) {
          dispatch({type: 'TRIP_ADDED_ERROR', payload: error})
        } else {
          dispatch({type: 'TRIP_ADDED_SUCCESS'})
        }
      })
      dispatch({type: 'TRIP_ADDED_REQUEST'})
    }
  },
  getTrip(uid) {
    return (dispatch, getState) => {
      ref.on('value', (snapshot) => {
        const trips = (snapshot.val()) ? snapshot.val().trips[uid] : []
        dispatch({type: 'GET_TRIP', payload: trips})
      })
    }
  },
  updateTrip(trip, uid) {
    return (dispatch) => {
      ref.child('trips').child(uid).update(trip, (error) => {
        if (error) {
          dispatch({type: 'UPDATE_TRIP_ERROR', payload: Error})
        } else {
          dispatch({type: 'UPDATE_TRIP_SUCCESS', payload: trip})
          dispatch(pushPath('trips'))
        }
      })
      dispatch({type: 'UPDATE_TRIP_REQUEST'})
    }
  },
  updateDestination(destination) {
    return {type: 'TRIP_UPDATE_DESTINATION', payload: destination}
  },
  updateStartDate(startDate) {
    return {type: 'TRIP_UPDATE_START_DATE', payload: startDate}
  },
  updateEndDate(endDate) {
    return {type: 'TRIP_UPDATE_END_DATE', payload: endDate}
  },
  updateComment(comment) {
    return {type: 'TRIP_UPDATE_COMMENT', payload: comment}
  }
}

