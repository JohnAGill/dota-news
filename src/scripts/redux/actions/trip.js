import Firebase from 'firebase'
import { pushPath } from 'redux-simple-router'
import getUidFromState from './common'

const tripsRef = new Firebase('https://toptal-project.firebaseio.com/trips')

export default {
  addTrip() {
    return (dispatch, getState) => {
      const trips = tripsRef.child(getUidFromState(getState()))
      const trip = getState().trip.trip
      dispatch({type: 'TRIP_ADDED_REQUEST'})
      trips.push({
        destination: trip.destination,
        comment: trip.comment,
        startDate: trip.startDate.format('l'),
        endDate: trip.endDate.format('l')
      }, (error) => {
        if (error) {
          dispatch({type: 'TRIP_ADDED_ERROR', payload: error})
        } else {
          dispatch({type: 'TRIP_ADDED_SUCCESS'})
        }
      })
    }
  },
  getTrip(uid) {
    return (dispatch, getState) => {
      tripsRef.on('value', (snapshot) => {
        const trips = (snapshot.val()) ? snapshot.val()[getUidFromState(getState())] : []
        const trip = trips[uid]
        dispatch({type: 'GET_TRIP', payload: trip})
      })
    }
  },
  updateTrip(trip, uid) {
    return (dispatch, getState) => {
      dispatch({type: 'UPDATE_TRIP_REQUEST'})
      tripsRef.child(getUidFromState(getState())).child(uid).update(trip, (error) => {
        if (error) {
          dispatch({type: 'UPDATE_TRIP_ERROR', payload: Error})
        } else {
          dispatch({type: 'UPDATE_TRIP_SUCCESS', payload: trip})
          dispatch(pushPath('trips'))
        }
      })
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

