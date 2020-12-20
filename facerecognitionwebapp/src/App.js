import React, { Component } from 'react';
import Particles from 'react-particles-js';

import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const particleOptions = {
  particles:{
    number:{
      value: 100,
      density:{
        enable: true,
        value_area: 1000
      }
    },
    line_linked: {
      color: '#757575'
    },
  }
}

function App() {
  return (
    <div className="App">
      <Particles params = {particleOptions} className="Particles" />
      <Navigation/>
      <div className="logoComp">
      {/*<Logo />*/}
      </div>
      
      <Rank/>
      <ImageLinkForm/>
    </div>
  );
}

export default App;
