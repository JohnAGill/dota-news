import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import OutBoundLink from '../outBoundLink/outBoundLink'

export default (props) => {
  const story = props.story
  return (
    <div className='card'>
      <h4 className='text-center'>{story.headline}</h4>
      <div className='links-container'>
        {story.links[0] ? <li><OutBoundLink link={story.links[0].link} source={story.links[0].source} /></li> : null}
        {story.links[1] ? <li><OutBoundLink link={story.links[1].link} source={story.links[1].source} /></li> : null}
        {story.links[2] ? <li><OutBoundLink link={story.links[2].link} source={story.links[2].source} /></li> : null}
      </div>
      <p className='story-date'>{story.humanReadableDate}</p>
    </div>
  )
}
