import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import _ from 'lodash'

export default class StoryCards extends Component {

  render() {
    return(
      <div className='container'>
        {_.map(this.props.stories, (story) =>
          (
            <div className='card'>
              <ul>
                <h4>{story.headline}</h4>
                {story.links[0] ? <li><a href={story.links[0].link}>{story.links[0].source}</a></li> : null}
                {story.links[1] ? <li><a href={story.links[1].link}>{story.links[1].source}</a></li> : null}
                {story.links[2] ? <li><a href={story.links[2].link}>{story.links[2].source}</a></li> : null}
                <p className='date-position'>{story.convertedDate}</p>
              </ul>
            </div>
          )
        )}
      </div>
    )
  }
}
