import { pushPath } from 'redux-simple-router'

export default {
  signUp() {
    return (dispatch) => {
      dispatch(pushPath('signup'))
    }
  },
  logIn() {
    return (dispatch) => {
      dispatch(pushPath('login'))
    }
  }
}
