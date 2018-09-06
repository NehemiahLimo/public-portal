import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">

  
<div>
  <Navbar className ="lee" >
 

  <Navbar.Header>
    <Navbar.Brand>
      <a href="#home">DPP Kenya</a>
    </Navbar.Brand>
  </Navbar.Header>
  <Nav>
    <NavItem eventKey={1} href="#">Dashboard</NavItem>
    <NavDropdown eventKey={2} title="Indicators" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>Malaria</MenuItem>
      <MenuItem eventKey={3.2}>Typhoid</MenuItem>
      <MenuItem eventKey={3.3}>epidemiological data</MenuItem>
    </NavDropdown>
    
    <NavDropdown eventKey={3} title="Health Reports" id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>download</MenuItem>
      <MenuItem eventKey={3.2}>Another action</MenuItem>
      <MenuItem eventKey={3.3}>download indicators</MenuItem>
      <MenuItem divider />
      <MenuItem eventKey={3.4}>other Reports</MenuItem>
    </NavDropdown>
  </Nav>
</Navbar>;

<div class="row">
  <div class="col-sm-6">
    <div class="card" >
      <div class="card-body text-secondary  card border-secondary mb-3">
        <h5 class="card-title  card border-secondary mb-3">Data Distribution</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Nairobi County</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Data Distribution</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Mombasa County</a>
      </div>
    </div>
  </div>
</div>
</div>





</div>
    );
  }
}

export default App;
