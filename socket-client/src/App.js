/**
 * @Author: Ali Ismail
 * @Date:   2018-04-11T14:13:42+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-12T13:39:21+02:00
 */



import React, { Component } from 'react'
import Header from './parts/Header'
import './App.css'
import openSocket from 'socket.io-client'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        status: 'disconnected'
      }
    this.connect = this.connect.bind(this)
    this.disconnect = this.disconnect.bind(this)
  }
  /*The first and most important method you will encounter while working with Socket.IO is on(). The on() method takes two arguments: the name of the event, in this case “connection” and a callback which will be executed after every connection event. on() is nothing more than a core Node.js method tied to the EventEmitter class.

    The connection event returns a socket object which will be passed to the callback function. By using said socket you will be able to send data back to the client in real time.*/
  componentWillMount(){
    this.socket = openSocket('http://localhost:3000')
    this.socket.on('connect',this.connect)
    this.socket.on('disconnect',this.disconnect)
  }
  connect(){
    this.setState({ status: 'connected'})
  }

  disconnect(){
    this.setState({status: 'disconnect'})
  }
  render() {
    return (
      <div className="App">
        <Header title="new header" />

      </div>
    );
  }
}

export default App
