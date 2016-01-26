import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import OutBoundLink from '../outBoundLink/outBoundLink'
import _ from 'lodash'

export default (props) => {
  const story = props.story
  return (
    <div className='card'>
      <h4 className='text-center'>{story.headline}</h4>
      <div className='links-container'>
        {_.map(story.links, (link) => <li><OutBoundLink link={link} /></li>)}
      </div>
      <p className='story-date'>{story.humanReadableDate}</p>
    </div>
  )
}

