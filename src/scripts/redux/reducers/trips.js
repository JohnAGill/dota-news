const initialState = {destination: null, startDate: null, endDate: null, comment: null}

export default function trips(state = initialState, action) {
  switch (action.type) {
    case 'TRIP_UPDATE_DESTINATION':
      return {...state, newTrip: {...state.newTrip, destination: action.payload}}
    case 'TRIP_UPDATE_START_DATE':
      return {...state, newTrip: {...state.newTrip, startDate: action.payload}}
    case 'TRIP_UPDATE_END_DATE':
      return {...state, newTrip: {...state.newTrip, endDate: action.payload}}
    case 'TRIP_UPDATE_COMMENT':
      return {...state, newTrip: {...state.newTrip, comment: action.payload}}
    case 'TRIP_ADDED_REQUEST':
      return {...state, saved: false}
    case 'TRIP_ADDED_ERROR':
      return {...state, error: action.payload, saved: false}
    case 'TRIP_ADDED_SUCCESS':
      return {...state, destination: null, startDate: null, endDate: null, comment: null, saved: true}
    default:
      return state
  }
}
