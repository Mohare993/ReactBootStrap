import React, { Component } from 'react';

class Headercomponent extends Component {
  render() {
    return(
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <a className="navbar-brand" href="#">Accounts</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">

          </li>
        </ul>
      </div>
    </nav>
    )
  }
}

export default Headercomponent;