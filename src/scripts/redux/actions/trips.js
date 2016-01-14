import Firebase from 'firebase'
import _ from 'lodash'
import { pushPath } from 'redux-simple-router'
import getUidFromState, {admin} from './common'

const tripsRef = new Firebase('https://toptal-project.firebaseio.com/trips')

const getTripsForAdmin = (dispatch) => {
  tripsRef.on('value', (snapshot) => {
    const users = (snapshot.val()) ? snapshot.val() : []
    dispatch({type: 'ADMIN_TRIPS_LOAD_SUCCESS', payload: _.flattenDeep(_.map(users, (trips, userId) => {
      return (_.map(trips, (trip, uid) => {
        return ({...trip, uid: uid, userId: userId})
      }))
    }))})
  }, (errorObject) => {
    dispatch({type: 'ADMIN_TRIPS_LOAD_ERROR', payload: errorObject.code})
  })
}

const getTripsForUser = (dispatch, getState) => {
  tripsRef.child(getUidFromState(getState())).on('value', (snapshot) => {
    const trips = (snapshot.val()) ? snapshot.val() : []
    dispatch({type: 'TRIPS_LOAD_SUCCESS', payload: _.map(trips, (trip, uid) => ({...trip, uid: uid, userId: getUidFromState(getState())}))})
  }, (errorObject) => {
    dispatch({type: 'TRIPS_LOAD_ERROR', payload: errorObject.code})
  })
}

export default {
  getTrips() {
    const userId = admin
    return (dispatch, getState) => {
      dispatch({type: 'TRIPS_LOAD_REQUEST'})
      if (getUidFromState(getState()) === userId) {
        getTripsForAdmin(dispatch)
      } else {
        getTripsForUser(dispatch, getState)
      }
    }
  },
  deleteTrip(pickedTrip) {
    return (dispatch, getState) => {
      dispatch({type: 'TRIP_DELETE_REQUEST'})
      tripsRef.child(pickedTrip.userId).child(pickedTrip.uid).remove((error) => {
        if (error) {
          dispatch({type: 'TRIP_DELETE_ERROR', payload: error})
        } else {
          dispatch({typr: 'TRIP_DELETE_SUCCESS', payload: pickedTrip})
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
