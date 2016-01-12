import Firebase from 'firebase'
import { pushPath } from 'redux-simple-router'

const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  addTrip() {
    return (dispatch, getState) => {
      const uid = getState().users.userAuth.uid
      const trips = ref.child('trips').child(uid)
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
      ref.on('value', (snapshot) => {
        const userId = getState().users.userAuth.uid
        const trips = (snapshot.val()) ? snapshot.val().trips[userId] : []
        const trip = trips[uid]
        dispatch({type: 'GET_TRIP', payload: trip})
      })
    }
  },
  updateTrip(trip, uid) {
    return (dispatch, getState) => {
      dispatch({type: 'UPDATE_TRIP_REQUEST'})
      const userId = getState().users.userAuth.uid
      ref.child('trips').child(userId).child(uid).update(trip, (error) => {
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

