const initialState = {loading: false, errorMessage: null, loggedIn: null}

export default function users(state = initialState, action) {
  switch (action.type) {
    case 'SIGN_UP_REQUEST':
      return {...state, loading: true, errorMessage: null}
    case 'SIGN_UP_ERROR':
      return {...state, loading: false, errorMessage: action.payload.message}
    case 'SIGN_UP_SUCCESS':
      return {...state, loading: false, errorMessage: null}
    case 'LOG_IN_SUCCESS':
      return {...state, loading: false, errorMessage: null, loggedIn: action.payload.auth.uid}
    case 'LOG_IN_FAILURE':
      return {...state, loading: false, errorMessage: null, loggedIn: null}
    case 'UPDATE_EMAIL':
      return {...state, email: action.payload}
    case 'UPDATE_PASSWORD':
      return {...state, password: action.payload}
    default:
      return state
  }
}
