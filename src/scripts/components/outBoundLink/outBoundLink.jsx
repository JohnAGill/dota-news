import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import ga from 'react-ga'

export default class OutBoundLink extends Component {

  redirect(link) { ga.outboundLink({ label: link }, () => location.assign(link)) }

  render() {
    return (
      <a onClick={() => this.redirect(this.props.link)}>{this.props.source}</a>
    )
  }
}
