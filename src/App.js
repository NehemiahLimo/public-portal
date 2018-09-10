import React, { Component } from 'react';
import './App.css';
//import React from 'react';
import Navigationbar from './components/navbar'
import Cardbody from './components/cardbody'
import Search from './components/search'





class App extends Component {





  render() {
		return (
			<div>
			<Navigationbar />


      <Search />

			<Cardbody />

			<Cardbody />
			</div>

	);


	}

  }




export default App;
