/**
 * @Author: Ali Ismail
 * @Date:   2018-04-11T14:13:42+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-11T22:04:26+02:00
 */



import React, { Component } from 'react'
import './App.css'
import openSocket from 'socket.io-client';

class App extends Component {
  constructor(props){
    super(props)
      this.state = {}

  }
  /*The first and most important method you will encounter while working with Socket.IO is on(). The on() method takes two arguments: the name of the event, in this case “connection” and a callback which will be executed after every connection event. on() is nothing more than a core Node.js method tied to the EventEmitter class.

    The connection event returns a socket object which will be passed to the callback function. By using said socket you will be able to send data back to the client in real time.*/
  componentWillMount(){
    this.socket = openSocket('http://localhost:3000')
    this.socket.on('connect',this.connect)
  }
  connect(){
    alert("connected")
    console.log(socket)
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
