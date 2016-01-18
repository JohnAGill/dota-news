const initialState = {loading: false, errorMessage: null, stories: []}

export default function stories(state = initialState, action) {
  switch (action.type) {
    case 'GET_STORIES_REQUEST':
      return state
    case 'GET_STORIES_SUCCESS':
      return {...state, stories: action.payload}
    case 'GET_STORIES_ERROR':
      return {...state, errorMessage: action.payload}
    default:
      return state
  }
}
