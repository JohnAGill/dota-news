import _ from 'lodash'
import S from 'string'

const initialState = {loadError: null, trips: [], loading: true, filter: ''}

function tripsState(state = initialState, action) {
  switch (action.type) {
    case 'TRIPS_LOAD_SUCCESS':
      return {...state, trips: action.payload, loadError: null, loading: false}
    case 'TRIPS_LOAD_ERROR':
      return {...state, trips: [], loadError: action.payload, loading: false}
    case 'TRIPS_LOAD_REQUEST':
      return {...state, loadError: null, loading: true}
    case 'TRIP_DELETED_ERROR':
      return {...state, deleteError: action.payload}
    case 'TRIP_DELETED_SUCCESS':
      return {...state, deleteError: null}
    case 'TRIP_DELETE_REQUEST':
      return {...state, deleteError: null}
    case 'UPDATE_FILTER':
      return {...state, filter: action.payload}
    default:
      return state
  }
}
export default function trips(state = initialState, action) {
  const state1 = tripsState(state, action)
  const tripFilter = (trip) => {
    return(S(trip.destination).contains(state1.filter))
  }
  return {...state1, visableTrips: _.filter(state1.trips, tripFilter)}
}
