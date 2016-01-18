import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import _ from 'lodash'

export default class StoryCards extends Component {

  render() {
    return(
      <div>
        {_.map(this.props.stories, (story) =>
          (
            <ul>
              <li>{story.headline}</li>
              <li><a href={story.links[0].link}>{story.links[0].source}</a></li>
              <li><a href={story.links[1].link}>{story.links[1].source}</a></li>
              <li><a href={story.links[2].link}>{story.links[2].source}</a></li>
              <li>{story.date}</li>
            </ul>
          )
        )}
      </div>
    )
  }
}
