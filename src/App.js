import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import 'tachyons';
import Clarifai from 'clarifai';

const app = new Clarifai.App({apiKey: '68b5c6f537be4ad4a9e502f82fef6503'});

const particlesOptions = {
  "particles": {
      "number": {
        "value": 50,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "size": {
        "value": 3
      }
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      imgUrl: "",
      regions: [],
      route: "signin",
      isSignedIn: false
    };
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {
        this.setState({ regions: response.outputs[0].data.regions });
      })
      .catch(err => {
        console.log(err);
      });
  };

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState({ isSignedIn: false });
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }

  render() {
    const { imgUrl, regions, route, isSignedIn } = this.state;
    return (
      <div className="App">
        <Particles className="bgParticles" params={particlesOptions} />
        <div style={{display:"flex", justifyContent:"space-between"}} className="pa2">
          <Logo />
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} />
        </div>
        {
          route === "home" ?
            <div>
              <Rank />
              <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
              <FaceRecognition regions={regions} imgUrl={imgUrl} />
            </div> :
          (
            route === "signin" ?
            <SignIn onRouteChange={this.onRouteChange} /> :
            <Register onRouteChange={this.onRouteChange} />
          )
        }
      </div>
    );
  }
}

export default App;
