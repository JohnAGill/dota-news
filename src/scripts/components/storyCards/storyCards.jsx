import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import _ from 'lodash'
import OutBoundLink from '../outBoundLink/outBoundLink'

export default class StoryCards extends Component {

  render() {
    return(
      <div className='container'>
        {_.map(this.props.stories, (story) =>
          (
            <div className='card'>
              <ul>
                <h4>{story.headline}</h4>
                {story.links[0] ? <li><OutBoundLink link={story.links[0].link} source={story.links[0].source} /></li> : null}
                {story.links[1] ? <li><a href={story.links[1].link}>{story.links[1].source}</a></li> : null}
                {story.links[2] ? <li><a href={story.links[2].link}>{story.links[2].source}</a></li> : null}
                <p className='story-date'>{story.humanReadableDate}</p>
              </ul>
            </div>
          )
        )}
      </div>
    )
  }
}
