import React, { Component } from 'react';
import './App.css';

import UserInput from './Components/userInput';
import UserOutput from './Components/userOutput';


class App extends Component {
  state = {
    username: 'default_username'
  }

  usernameChangeHandler = (event) => {
    this.setState ({username: event.target.value})
  }

  render() {
    return (
      <div className="App">
       <div>
        <UserInput 
        changed={this.usernameChangeHandler}
        currentName={this.state.userName} />
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        <UserOutput userName={this.state.username}/>
        </div>
      </div>
    );
  }
}

export default App;
