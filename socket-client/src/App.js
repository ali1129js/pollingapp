/**
 * @Author: Ali Ismail
 * @Date:   2018-04-11T14:13:42+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-11T16:39:40+02:00
 */



import React, { Component } from 'react'
import io from 'socket.io-client'
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
    }
    
  }
  //  for emitting a socket.io event
  componentWillMount(){
    this.socket = io('http://localhost:3000')
    this.socket.on('connect',this.connect)
  }
  connect(){
    console.log("connected" + this.socket.id)
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Hello from react
        </p>
      </div>
    );
  }
}

export default App;
