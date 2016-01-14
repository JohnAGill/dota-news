import _ from 'lodash'
import S from 'string'
import { createSelector } from 'reselect'

const initialState = {loadError: null, trips: [], loading: true, filter: ''}

function tripsState(state = initialState, action) {
  switch (action.type) {
    case 'ADMIN_TRIPS_LOAD_SUCCESS':
      return {...state, trips: action.payload, loadError: null, loading: false}
    case 'ADMIN_TRIPS_LOAD_ERROR':
      return {...state, trips: [], loadError: action.payload, loading: false}
    case 'ADMIN_TRIP_DELETE_ERROR':
      return {...state, deleteError: action.payload}
    case 'ADMIN_TRIP_DELETE_SUCCESS':
      return {...state, deleteError: null}
    case 'TRIPS_LOAD_SUCCESS':
      return {...state, trips: action.payload, loadError: null, loading: false}
    case 'TRIPS_LOAD_ERROR':
      return {...state, trips: [], loadError: action.payload, loading: false}
    case 'TRIPS_LOAD_REQUEST':
      return {...state, loadError: null, loading: true}
    case 'TRIP_DELETE_ERROR':
      return {...state, deleteError: action.payload}
    case 'TRIP_DELETE_SUCCESS':
      return {...state, deleteError: null}
    case 'TRIP_DELETE_REQUEST':
      return {...state, deleteError: null}
    case 'TRIPS_UPDATE_FILTER':
      return {...state, filter: action.payload}
    default:
      return state
  }
}

function addVisibleTrips(state) {
  const visibleTrips = _.filter(state.trips, (trip) => (S(trip.destination).contains(state.filter)))
  if (_.isEqual(visibleTrips, state.visibleTrips)) {
    return state
  }
  return {...state, visibleTrips: visibleTrips}
}

export default createSelector(tripsState, addVisibleTrips)
