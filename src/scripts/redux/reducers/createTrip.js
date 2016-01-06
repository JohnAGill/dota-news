const initialState = {saved: false}

export default function createTrip(state = initialState, action) {
  switch (action.type) {
    case 'TRIP_UPDATE_DESTINATION':
      return {...state, destination: action.payload}
    case 'TRIP_UPDATE_START_DATE':
      return {...state, startDate: action.payload}
    case 'TRIP_UPDATE_END_DATE':
      return {...state, endDate: action.payload}
    case 'TRIP_UPDATE_COMMENT':
      return {...state, comment: action.payload}
    case 'TRIP_ADDED_REQUEST':
      return {...state, saved: false}
    case 'TRIP_ADDED_ERROR':
      return {...state, error: action.payload, saved: false}
    case 'TRIP_ADDED_SUCCESS':
      return {...state,
      saved: true,
      destination: null,
      startDate: null,
      endDate: null,
      comment: null,
      lastTrip: {...state.createTrip,
      destination: state.destination,
      startDate: state.startDate,
      endDate: state.endDate,
      comment: state.comment}}
    default:
      return state
  }
}
