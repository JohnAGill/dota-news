import Firebase from 'firebase'

const storiesRef = new Firebase('https://e-sports-news-dev.firebaseio.com/dota/stories')

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
