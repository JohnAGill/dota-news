import React, {Component} from 'react' // eslint-disable-line no-unused-vars
import ga from 'react-ga'

export default class Home extends Component {

  redirect(link) {
    ga.outboundLink({ label: link },
      () => location.assign(link)
    )
  }

  render() {
    return (
      <p redirect={() => this.handleClick(this.props.link)}>{this.props.source}</p>
    )
  }
}
