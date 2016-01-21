import React, {Component} from 'react' // eslint-disable-line no-unused-vars

export default class Navbar extends Component {
  render() {
    return(
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
    )
  }
}
