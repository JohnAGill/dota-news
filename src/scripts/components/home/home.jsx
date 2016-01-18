import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'
import StoryCard from '../storyCard/storyCard'
import actions from '../../redux/actions/stories'

@connect((state) => state.stories, actions)
export default class Home extends Component {

  componentWillMount() {
    this.props.getStories()
  }

  render() {
    return(
      <div>
        <StoryCard stories={this.props.stories}/>
      </div>)
  }
}
