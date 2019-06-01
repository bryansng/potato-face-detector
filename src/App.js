import React, { Component } from 'react';
import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
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
      regions: []
    };
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onButtonSubmit = () => {
    this.setState({ imgUrl: this.state.input });
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
      .then(response => {/* 
        console.log(response);
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box); */
        this.setState({ regions: response.outputs[0].data.regions });
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <Particles className="bgParticles" params={particlesOptions} />
        <div style={{display:"flex", justifyContent:"space-between"}} className="pa2">
          <Logo />
          <Navigation />
        </div>
        <Rank />
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition regions={this.state.regions} imgUrl={this.state.imgUrl} />
      </div>
    );
  }
}

export default App;
