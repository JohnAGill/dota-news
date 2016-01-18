const initialState = {loading: false, errorMessage: null, stories: []}

export default function stories(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_UP_REQUEST':
      return {...state, loading: true, errorMessage: null}
    case 'GET_STORIES_REQUEST':
      return state
    case 'GET_STORIES_SUCCESS':
      return {...state, stories: action.payload}
    default:
      return state
  }
}
