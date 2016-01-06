const initialState = {newTrip: {}, saved: false, loadError: null, trips: []}

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
      return {...state, newTrip: {}, saved: true}
    case 'TRIP_LOAD_SUCCESS':
      return {...state, trips: action.payload, loadError: null}
    case 'TRIP_LOAD_ERROR':
      return {...state, trips: [], loadError: action.payload}
    case 'TRIP_LOAD_REQUEST':
      return {...state, loadError: null}
    case 'TRIP_DELETED_ERROR':
      return {...state, deleteError: action.payload}
    case 'TRIP_DELETED_SUCCESS':
      return {...state, deleteError: null}
    case 'TRIP_DELETED_REQUEST':
      return {...state, deleteError: null}
    default:
      return state
  }
}
