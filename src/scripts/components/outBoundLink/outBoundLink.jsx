import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import ga from 'react-ga'

export default class OutBoundLink extends Component {

  redirect(link, event) {
    event.preventDefault()
    ga.outboundLink({ label: link }, () => {
      location.assign(link) // eslint-disable-line no-undef
    })
  }

  render() {
    return (
      <a href={this.props.link} onClick={(e) => this.redirect(this.props.link, e)}>{this.props.source}</a>
    )
  }
}
