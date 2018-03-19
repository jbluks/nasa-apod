import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor() {
    super()

    this.state = {
      imageUrl: ''
    }
  }
  
  componentWillMount() {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=NP6EqWhL7HsvhKRrUzmOG7moB0ETUavrrdsMd5wh')
      .then((response) => {
        this.setState({
          imageUrl: response.data.url
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div className="App">
        <p className="App-intro">
          <img src={this.state.imageUrl} alt=""/>
        </p>
      </div>
    );
  }
}

export default App;
