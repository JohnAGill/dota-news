import Firebase from 'firebase'
import _ from 'lodash'
import { pushPath } from 'redux-simple-router'

const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  getTrips() {
    return (dispatch) => {
      ref.on('value', (snapshot) => {
        const trips = (snapshot.val()) ? snapshot.val().trips : null
        dispatch({type: 'TRIP_LOAD_SUCCESS', payload: _.map(trips, (trip, uid) => ({...trip, uid: uid}))})
      }, (errorObject) => {
        dispatch({type: 'TRIP_LOAD_ERROR', payload: errorObject.code})
      })
      dispatch({type: 'TRIP_LOAD_REQUEST'})
    }
  },
  deleteTrip(pickedTrip) {
    return (dispatch, getState) => {
      ref.child('trips').child(pickedTrip.uid).remove((error) => {
        if (error) {
          dispatch({type: 'TRIP_DELETED_ERROR', payload: error})
        } else {
          dispatch({type: 'TRIP_DELETED_SUCCESS', payload: pickedTrip})
        }
      })
      dispatch({type: 'TRIP_DELETE_REQUEST'})
    }
  },
  addTrip() {
    return (dispatch) => {
      dispatch(pushPath('new'))
    }
  }
}
