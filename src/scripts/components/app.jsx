/*eslint-disable */

import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'
import _ from 'lodash'
import actions from '../redux/actions/stories'
import OutBoundLink from './outBoundLink/outBoundLink'

@connect((state) => state.stories, actions)
export default class App extends Component {

  componentWillMount() {
    this.props.loadStories()
  }

  render() {
    return(
      <div className='app-border'>
        <header>
          <div className='container nav-margin-bottom'>
            <div className='row'>
              <nav className='navbar navbar-default navbar-fixed-top'>
                <div className='container-fluid'>
                  <h1 className='brand'>ESPORTS NEWS</h1>
                </div>
              </nav>
            </div>
          </div>
        </header>
        <div className='container'>
          { _.map(this.props.stories, (story) => {
              return(
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
            })
          }
        </div>

      </div>
    )
  }
}
