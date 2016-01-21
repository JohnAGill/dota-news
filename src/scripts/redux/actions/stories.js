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
        const orderedStories = _.chain(stories)
          .sortBy((story) => (story.date)).reverse()
          .map((story) => { return({...story, humanReadableDate: moment(story.date).calendar()}) })
          .value()
        dispatch({type: 'LOAD_STORIES_SUCCESS', payload: orderedStories})
      }, (errorObject) => {
        dispatch({type: 'LOAD_STORIES_ERROR', payload: errorObject.code})
      })
    }
  }
}
