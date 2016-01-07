import Firebase from 'firebase'
import _ from 'lodash'
import { pushPath } from 'redux-simple-router'

const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  getTrips() {
    return (dispatch) => {
      dispatch({type: 'TRIPS_LOAD_REQUEST'})
      ref.on('value', (snapshot) => {
        const trips = (snapshot.val()) ? snapshot.val().trips : []
        dispatch({type: 'TRIPS_LOAD_SUCCESS', payload: _.map(trips, (trip, uid) => ({...trip, uid: uid}))})
      }, (errorObject) => {
        dispatch({type: 'TRIPS_LOAD_ERROR', payload: errorObject.code})
      })
    }
  },
  deleteTrip(pickedTrip) {
    return (dispatch, getState) => {
      dispatch({type: 'TRIP_DELETE_REQUEST'})
      ref.child('trips').child(pickedTrip.uid).remove((error) => {
        if (error) {
          dispatch({type: 'TRIP_DELETED_ERROR', payload: error})
        } else {
          dispatch({type: 'TRIP_DELETED_SUCCESS', payload: pickedTrip})
        }
      })
    }
  },
  addTrip() {
    return (dispatch) => {
      dispatch(pushPath('trips/new'))
    }
  }
}
