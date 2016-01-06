const initialState = {newTrip: {}, saved: false, loadError: null, trips: []}

export default function trips(state = initialState, action) {
  switch (action.type) {
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
    case 'TRIP_DELETE_REQUEST':
      return {...state, deleteError: null}
    default:
      return state
  }
}
