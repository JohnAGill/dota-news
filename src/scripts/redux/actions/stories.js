import Firebase from 'firebase'
import config from '../../config'
import _ from 'lodash'

const storiesRef = new Firebase(config.firebaseEndpoint)

export default {
  loadStories() {
    return(dispatch) => {
      dispatch({type: 'LOAD_STORIES_REQUEST'})
      storiesRef.on('value', (snapshot) => {
        const stories = (snapshot.val() ? snapshot.val() : [])
        const orderedStories = _.sortBy(stories, (story) => { return(story.date) })
        dispatch({type: 'LOAD_STORIES_SUCCESS', payload: orderedStories.reverse()})
        return (console.log(stories))
      }, (errorObject) => {
        dispatch({type: 'LOAD_STORIES_ERROR', payload: errorObject.code})
      })
    }
  }
}
