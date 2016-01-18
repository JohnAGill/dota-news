import Firebase from 'firebase'

const storiesRef = new Firebase('https://e-sports-news-dev.firebaseio.com/dota/stories')

export default {
  getStories() {
    return(dispatch) => {
      dispatch({type: 'GET_STORIES_REQUEST'})
      storiesRef.on('value', (snapshot) => {
        const stories = (snapshot.val() ? snapshot.val() : [])
        dispatch({type: 'GET_STORIES_SUCCESS', payload: stories})
        return (console.log(stories))
      })
    }
  }
}
