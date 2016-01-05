const initialState = {}

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'UPDATE_DESTINATION':
      return {...state, destination: action.payload}
    case 'UPDATE_START_DATE':
      return {...state, startDate: action.payload}
    case 'UPDATE_END_DATE':
      return {...state, endDate: action.payload}
    case 'UPDATE_COMMENT':
      return {...state, comment: action.payload}
    case 'ADDED_TRIP':
      return state
    default:
      return state
  }
}
