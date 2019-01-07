import React, { Component } from 'react';
import './App.css';

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="App">
        <div className="vimeo-wrapper">
          <div className="video">
            <iframe
              title="background-video"
              src="https://player.vimeo.com/video/76979871?background=1"
              frameborder="0"
              webkitallowfullscreen
              mozallowfullscreen
              allowfullscreen
            />
          </div>
        </div>
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
