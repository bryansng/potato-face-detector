import React, { Component } from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Modal from './components/Modal/Modal';
import Profile from './components/Profile/Profile';

const BACKEND_URL = 'http://localhost:3000/';
// const BACKEND_URL = 'https://face-detection-1.herokuapp.com/';

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
  isProfileOpen: false,
  user: {
    id: 0,
    name: '',
    email: '',
    entries: 0,
    joined: '',
    pet: '',
    age: ''
  }
};

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  };

  // first cycle in React: we check if there is a token in session storage.
  componentDidMount() {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      fetch(`${BACKEND_URL}signin`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
      .then(res => res.json())
      .then(data => {
        if (data && data.id) {
          this.fetchUserData(data.id, token);
        }
      })
      .catch(console.log)
    }
  }

  fetchUserData = (userId, token) => {
    fetch(`${BACKEND_URL}profile/${userId}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token
      }
    })
    .then(res => res.json())
    .then(user => {
      if (user && user.email) {
        this.loadUser(user);
        this.onRouteChange('home');
      }
    })
  }

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

  onImageURLInputChange = (event) => {
    this.setState({ input: event.target.value });
  };

  onImageURLKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.onPictureSubmit();
    }
  };

  onPictureSubmit = () => {
    if (this.state.input) {
      this.setState({ imgUrl: this.state.input });
      fetch(`${BACKEND_URL}imageurl`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': window.sessionStorage.getItem('token')
        },
        body: JSON.stringify({
          imgUrl: this.state.input
        })
      })
      .then(resp => {
        if (resp.status === 400)
          throw new Error('Invalid image URL given');
        return resp.json();
      })
      .then(resp => {
        fetch(`${BACKEND_URL}image`, {
          method: 'put',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': window.sessionStorage.getItem('token')
          },
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
        .then(resp => resp.json())
        .then(count => this.setState(Object.assign(this.state.user, { entries: count })))
        
        this.setState({ regions: resp.outputs[0].data.regions });
      })
      .catch(console.log);
    }
  };

  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState);
      window.sessionStorage.removeItem('token');
    } else if (route === 'home') {
      this.setState({ isSignedIn: true });
    }
    this.setState({ route: route });
  }

  toggleModal = () => (
    this.setState((prevState) => ({ isProfileOpen: !prevState.isProfileOpen }))
  );

  render() {
    const { user, imgUrl, regions, route, isSignedIn, isProfileOpen } = this.state;
    return (
      <div className="App">
        <Particles className="bgParticles" params={particlesOptions} />
        <div style={{display:"flex", justifyContent:"space-between"}} className="pa2">
          <Logo />
          <Navigation onRouteChange={this.onRouteChange} isSignedIn={isSignedIn} toggleModal={this.toggleModal} />
        </div>
        {
          isProfileOpen &&
          <Modal>
            <Profile BACKEND_URL={BACKEND_URL} user={user} loadUser={this.loadUser} toggleModal={this.toggleModal} />
          </Modal>
        }
        {
          route === "home" ?
            <div>
              <Rank name={this.state.user.name} entries={this.state.user.entries} />
              <ImageLinkForm
                onImageURLKeyDown={this.onImageURLKeyDown}
                onImageURLInputChange={this.onImageURLInputChange} 
                onPictureSubmit={this.onPictureSubmit}
              />
              <FaceRecognition regions={regions} imgUrl={imgUrl} />
            </div> :
          (
            route === "signin" ?
            <SignIn BACKEND_URL={BACKEND_URL} onRouteChange={this.onRouteChange} fetchUserData={this.fetchUserData} loadUser={this.loadUser} /> :
            <Register BACKEND_URL={BACKEND_URL} onRouteChange={this.onRouteChange} fetchUserData={this.fetchUserData} loadUser={this.loadUser} />
          )
        }
      </div>
    );
  }
}

export default App;
