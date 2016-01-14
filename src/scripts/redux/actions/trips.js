import Firebase from 'firebase'
import _ from 'lodash'
import { pushPath } from 'redux-simple-router'
import getUidFromState from './common'

const tripsRef = new Firebase('https://toptal-project.firebaseio.com/trips')

const getTripsForAdmin = (dispatch) => {
  tripsRef.on('value', (snapshot) => {
    const users = (snapshot.val()) ? snapshot.val() : []
    dispatch({type: 'ADMIN_TRIPS_LOAD_SUCCESS', payload: _.flattenDeep(_.map(users, (trips, usersId) => {
      return (_.map(trips, (trip, uid) => {
        return ({...trip, uid: uid, usersId: usersId})
      }))
    }))})
  }, (errorObject) => {
    dispatch({type: 'ADMIN_TRIPS_LOAD_ERROR', payload: errorObject.code})
  })
}

const getTripsForUser = (dispatch, getState) => {
  tripsRef.child(getUidFromState(getState())).on('value', (snapshot) => {
    const trips = (snapshot.val()) ? snapshot.val() : []
    dispatch({type: 'TRIPS_LOAD_SUCCESS', payload: _.map(trips, (trip, uid) => ({...trip, uid: uid}))})
  }, (errorObject) => {
    dispatch({type: 'TRIPS_LOAD_ERROR', payload: errorObject.code})
  })
}

export default {
  getTrips() {
    const userId = '2f02427d-2858-4f06-a3a9-fc5b957547c0'
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
      if (getUidFromState(getState()) === '2f02427d-2858-4f06-a3a9-fc5b957547c0') {
        tripsRef.child(pickedTrip.usersId).child(pickedTrip.uid).remove((error) => {
          if (error) {
            dispatch({type: 'ADMIN_TRIP_DELETE_ERROR', payload: error})
          } else {
            dispatch({typr: 'ADMIN_TRIP_DELETE_SUCCESS', payload: pickedTrip})
          }
        })
      } else {
        tripsRef.child(getUidFromState(getState())).child(pickedTrip.uid).remove((error) => {
          if (error) {
            dispatch({type: 'TRIP_DELETE_ERROR', payload: error})
          } else {
            dispatch({type: 'TRIP_DELETE_SUCCESS', payload: pickedTrip})
          }
        })
      }
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
  },
  getTripsForAdmin(dispatch, getState) {
    tripsRef.on('value', (snapshot) => {
      const users = (snapshot.val()) ? snapshot.val() : []
      dispatch({type: 'ADMIN_TRIPS_LOAD_SUCCESS', payload: _.flattenDeep(_.map(users, (trips, usersId) => {
        return (_.map(trips, (trip, uid) => {
          return ({...trip, uid: uid, usersId: usersId})
        }))
      }))})
    }, (errorObject) => {
      dispatch({type: 'ADMIN_TRIPS_LOAD_ERROR', payload: errorObject.code})
    })
  }
}
