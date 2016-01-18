const initialState = {loading: false, errorMessage: null, stories: []}

export default function stories (state = initialState, action) {
  switch (action.type) {
    case 'LOAD_STORIES_REQUEST':
      return state
    case 'LOAD_STORIES_SUCCESS':
      return {...state, stories: action.payload}
    case 'LOAD_STORIES_ERROR':
      return {...state, errorMessage: action.payload}
    default:
      return state
  }
}
