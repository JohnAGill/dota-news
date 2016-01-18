import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import {connect} from 'react-redux'
import StoryCards from '../storyCards/storyCards'
import actions from '../../redux/actions/stories'

@connect((state) => state.stories, actions)
export default class Home extends Component {

  componentWillMount() {
    this.props.loadStories()
  }

  render() {
    return(
      <div>
        <StoryCards stories={this.props.stories}/>
      </div>)
  }
}
