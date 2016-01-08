import Firebase from 'firebase'
import { pushPath } from 'redux-simple-router'

const ref = new Firebase('https://toptal-project.firebaseio.com')

const logOn = (dispatch, getState) => {
  const userInfo = {
    email: getState().users.email,
    password: getState().users.password
  }
  ref.authWithPassword(userInfo, (loginError, authData) => {
    if (loginError) {
      dispatch({type: 'LOG_IN_FAILURE', payload: loginError})
    } else {
      dispatch({type: 'LOG_IN_SUCCESS', payload: authData})
      dispatch(pushPath('trips'))
    }
  })
}

export default {
  signUp() {
    return (dispatch, getState) => {
      const userInfo = {
        email: getState().users.email,
        password: getState().users.password
      }
      dispatch({type: 'SIGN_UP_REQUEST'})
      ref.createUser(userInfo, (signupError, userData) => {
        if (signupError) {
          dispatch({type: 'SIGN_UP_ERROR', payload: signupError})
        } else {
          logOn(dispatch, getState)
        }
      })
    }
  },
  logIn() {
    return (dispatch, getState) => logOn(dispatch, getState)
  },
  updateEmail(email) {
    return {
      type: 'UPDATE_EMAIL',
      payload: email
    }
  },
  updatePassword(password) {
    return {
      type: 'UPDATE_PASSWORD',
      payload: password
    }
  },
  getUserAuthData() {
    return (dispatch, getState) => {
      dispatch({type: 'CHECK_USER_AUTH_REQUEST'})
      const authDataCallback = (authData) => {
        if (authData) {
          dispatch({type: 'USER_AUTH_SUCCESS', payload: authData})
        } else {
          dispatch({type: 'USER_AUTH_ERROR', payload: 'error authing user'})
        }
      }
      ref.onAuth(authDataCallback)
    }
  },
  redirectUnauthedUser() {
    return (dispatch) => {
      dispatch(pushPath('/'))
    }
  }
}
