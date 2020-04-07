import React, { Component } from 'react';
import './App.css';
import LocationSelect from './components/LocationSelect';

class App extends Component {

  render(){
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>TQS Midterm - Air Quality</h1>
        </div>
        <div className="App">
          <LocationSelect/>
        </div> 
      </div>
      )
  }

}

export default App;
