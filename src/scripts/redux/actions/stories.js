import Firebase from 'firebase'
import config from '../../config/index.js'

const storiesRef = new Firebase(config.firebaseEndpoint)

export default {
  loadStories() {
    return(dispatch) => {
      dispatch({type: 'LOAD_STORIES_REQUEST'})
      storiesRef.on('value', (snapshot) => {
        const stories = (snapshot.val() ? snapshot.val() : [])
        dispatch({type: 'LOAD_STORIES_SUCCESS', payload: stories})
        return (console.log(stories))
      }, (errorObject) => {
        dispatch({type: 'LOAD_STORIES_ERROR', payload: errorObject.code})
      })
    }
  }
}
