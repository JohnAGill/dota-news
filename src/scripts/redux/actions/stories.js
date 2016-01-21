import Firebase from 'firebase'
import config from '../../config'
import _ from 'lodash'
import moment from 'moment'

const storiesRef = new Firebase(config.firebaseEndpoint)

export default {
  loadStories() {
    return(dispatch) => {
      dispatch({type: 'LOAD_STORIES_REQUEST'})
      storiesRef.on('value', (snapshot) => {
        const stories = (snapshot.val() ? snapshot.val() : [])
        const orderedStories = _.sortBy(stories, (story) => (story.date)).reverse()
        const convertDate = _.map(orderedStories, (story) => { return({...story, convertedDate: moment(story.date).calendar()}) })
        dispatch({type: 'LOAD_STORIES_SUCCESS', payload: convertDate})
      }, (errorObject) => {
        dispatch({type: 'LOAD_STORIES_ERROR', payload: errorObject.code})
      })
    }
  }
}
