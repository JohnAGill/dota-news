import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import OutBoundLink from '../outBoundLink/outBoundLink'

export default (props) => {
  const links = props.link
  return (
    <li><OutBoundLink link={links.link} source={links.source} /></li>
  )
}
