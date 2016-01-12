import Moment from 'moment'

const initialState = {saved: false, loading: true, trip: {destination: null, startDate: Moment(), endDate: Moment(), comment: null}}

export default function createTrip(state = initialState, action) {
  switch (action.type) {
    case 'TRIP_ADDED_REQUEST':
      return {...state, saved: false}
    case 'TRIP_ADDED_ERROR':
      return {...state, error: action.payload, saved: false}
    case 'TRIP_ADDED_SUCCESS':
      return {...state, saved: true, trip: {destination: null, startDate: Moment(), endDate: Moment(), comment: null}}
    case 'TRIP_UPDATE_DESTINATION':
      return {...state, trip: {...state.trip, destination: action.payload}}
    case 'TRIP_UPDATE_START_DATE':
      return {...state, trip: {...state.trip, startDate: action.payload}}
    case 'TRIP_UPDATE_END_DATE':
      return {...state, trip: {...state.trip, endDate: action.payload}}
    case 'TRIP_UPDATE_COMMENT':
      return {...state, trip: {...state.trip, comment: action.payload}}
    case 'GET_TRIP':
      return {...state, trip: action.payload, loading: false}
    case 'UPDATE_TRIP_ERROR':
      return {...state, error: action.payload}
    case 'UPDATE_TRIP_SUCCESS':
      return {...state, trip: action.payload}
    case 'UPDATE_TRIP_REQUEST':
      return state
    default:
      return state
  }
}
