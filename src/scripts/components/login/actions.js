import Firebase from 'firebase'
const ref = new Firebase('https://toptal-project.firebaseio.com')

export default {
  signUp() {
    return (dispatch, getState) => {
      const userInfo = {
        email: getState().users.email,
        password: getState().users.password
      }
      ref.createUser(userInfo, (signupError, userData) => {
        if (signupError) {
          dispatch({type: 'SIGN_UP_ERROR', payload: signupError})
        } else {
          ref.authWithPassword(userInfo, (loginError, authData) => {
            if (loginError) {
              dispatch({type: 'LOG_IN_FAILURE', payload: loginError})
            } else {
              dispatch({type: 'LOG_IN_SUCCESS', payload: authData})
            }
          })
        }
      })
      dispatch({type: 'SIGN_UP_REQUEST'})
    }
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
  }
}
