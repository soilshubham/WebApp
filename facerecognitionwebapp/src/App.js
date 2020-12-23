import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';

import Navigation from './Components/Navigation/Navigation';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';

import './App.css';

const app = new Clarifai.App({
  apiKey: '4b5d5230d2a645a99992c1c1e17471b8'
 });

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
      color: '#464646'
    },
  }
}

class App extends Component {

  constructor() {
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box: {},
      route: 'home',
    }
  }

  calculateFaceLoaction = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height),

    }
  }

  displayBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value});
  }

  onButtonSubmit = () =>{

    this.setState({imageUrl: this.state.input})

    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayBox(this.calculateFaceLoaction(response)))
    .catch(err => console.log(err));

  }

  onRouteChange = (routeValue) =>{
    this.setState({route: routeValue})
  }

  render(){

    switch(this.state.route){

      case 'home':
        return (
          <div id="home-page">
            <Particles params = {particleOptions} className="Particles" />
            <Navigation currentRoute={this.state.route} onRouteChange={this.onRouteChange} />
            <div className="logoComp">
            {/*<Logo />*/}
            </div>
            
            <Rank/>
            <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit = {this.onButtonSubmit} />
            <FaceRecognition box = {this.state.box} imageUrl = {this.state.imageUrl} />
          </div>
        );

      case 'signin':
        return (
          <div id="signin-page">
            <Particles params = {particleOptions} className="Particles" />
            <Navigation currentRoute={this.state.route} onRouteChange={this.onRouteChange} />
            <SignIn onRouteChange={this.onRouteChange}/>
          </div>
        );
      case 'register':
        return (
          <div id="register-page">
            <Particles params = {particleOptions} className="Particles" />
            <Navigation currentRoute={this.state.route} onRouteChange={this.onRouteChange} />
            <Register onRouteChange={this.onRouteChange} />
          </div>
        );
    }
  }
}

export default App;
