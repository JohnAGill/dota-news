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
                <li><a href={story.links[0].link}>{story.links[0].source}</a></li>
                <li><a href={story.links[1].link}>{story.links[1].source}</a></li>
                <li><a href={story.links[2].link}>{story.links[2].source}</a></li>
                <p>{story.date}</p>
              </ul>
            </div>
          )
        )}
      </div>
    )
  }
}
