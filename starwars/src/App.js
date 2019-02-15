import React, { Component } from 'react';
import './App.css';
import StarWars from './components/StarWars'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {

    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.

    fetch(URL)  //gets URL data from link above
      .then(res => {
        return res.json();  // returns the JSON data from link
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });  // creates property
      })
      .catch(err => {
        throw new Error(err);
      });
      
  };


  render() {
    
    return (
      
      <div className="App">
        {/* {console.log(this.state.starwarsChars)} */}
        
        <h1 className="Header">React Wars</h1>  {/*title above all boxes*/}
        
        <StarWars charsList={this.state.starwarsChars}/>  {/*calls StarWars component andcreates char output*/}
      </div>
    );
  }
}

export default App;