import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import _ from 'lodash'
import Story from './story'

export default class StoryCards extends Component {

  render() {
    return(
      <div className='container'>
        {_.map(this.props.stories, (story) => <Story story={story} />)}
      </div>
    )
  }
}
