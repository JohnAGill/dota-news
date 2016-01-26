import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import OutBoundLink from '../outBoundLink/outBoundLink'

export default (props) => {
  const link = props.link
  return (
    <li><OutBoundLink link={link.link} source={link.source} /></li>
  )
}
