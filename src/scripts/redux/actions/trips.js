import Firebase from 'firebase'
import _ from 'lodash'
import { pushPath } from 'redux-simple-router'

const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  getTrips() {
    return (dispatch, getState) => {
      dispatch({type: 'TRIPS_LOAD_REQUEST'})
      ref.on('value', (snapshot) => {
        const userId = getState().users.userAuth.uid
        const trips = (snapshot.val()) ? snapshot.val().trips : []
        dispatch({type: 'TRIPS_LOAD_SUCCESS', payload: _.map(trips[userId], (trip, uid) => ({...trip, uid: uid}))})
      }, (errorObject) => {
        dispatch({type: 'TRIPS_LOAD_ERROR', payload: errorObject.code})
      })
    }
  },
  deleteTrip(pickedTrip) {
    return (dispatch, getState) => {
      const userId = getState().users.userAuth.uid
      dispatch({type: 'TRIP_DELETE_REQUEST'})
      ref.child('trips').child(userId).child(pickedTrip.uid).remove((error) => {
        if (error) {
          dispatch({type: 'TRIP_DELETE_ERROR', payload: error})
        } else {
          dispatch({type: 'TRIP_DELETE_SUCCESS', payload: pickedTrip})
        }
      })
    }
  },
  addTrip() {
    return (dispatch) => {
      dispatch(pushPath('trips/new'))
    }
  },
  updateFilter(filter) {
    return (dispatch) => {
      dispatch({type: 'TRIPS_UPDATE_FILTER', payload: filter})
    }
  }
}
