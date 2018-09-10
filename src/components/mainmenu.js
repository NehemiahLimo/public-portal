import React, { Component } from 'react';


export default class Navigationbar extends Component{


  render(){


    return(
      <div>
        <div>
        <div>
        {/*<p classNameName="btn btn-warning" >new thing ahead!</p> */}

        <nav className="navbar navbar-expand-lg navbar-light bg-info">
  <a className="navbar-brand" href="#">About</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
      <i className=""></i>
        <a className="nav-link " href="#">Dashboard<span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">counties</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Indicators
               </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Malaria</a>
          <a className="dropdown-item" href="#">HIV & AIDS</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">DHIS2 Indicators</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">News & Updates</a>
      </li>
    </ul>

  </div>
</nav>



        </div>
      </div>
    </div>




      );
  }
}
