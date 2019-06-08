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

const initialState = {
  input: "",
  imgUrl: "",
  regions: [],
  route: "signin",
  isSignedIn: false,
  user: {
    id: 0,
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  };

  loadUser = (data) => {
    this.setState({ user: {
      id: data.id,
      name: data.name,
      email: data.email,
      password: data.password,
      entries: data.entries,
      joined: data.joined
    }});
  };

  onInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onPictureSubmit = () => {
    this.setState({ imgUrl: this.state.input });

    fetch('https://face-detection-1.herokuapp.com/imageurl', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        imgUrl: this.state.input
      })
    })
    .then(response => response.json())
    .then(response => {
      fetch('https://face-detection-1.herokuapp.com/image', {
        method: 'put',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          id: this.state.user.id
        })
      })
      .then(response => response.json())
      .then(count => this.setState(Object.assign(this.state.user, { entries: count })))
      
      this.setState({ regions: response.outputs[0].data.regions });
    })
    .catch(console.log);
  };

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState);
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
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageLinkForm onInputChange={this.onInputChange} onPictureSubmit={this.onPictureSubmit} />
              <FaceRecognition regions={regions} imgUrl={imgUrl} />
            </div> :
          (
            route === "signin" ?
            <SignIn onRouteChange={this.onRouteChange} loadUser={this.loadUser} /> :
            <Register onRouteChange={this.onRouteChange} loadUser={this.loadUser} />
          )
        }
      </div>
    );
  }
}

export default App;
