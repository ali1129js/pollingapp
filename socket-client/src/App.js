/**
 * @Author: Ali Ismail
 * @Date:   2018-04-11T14:13:42+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-12T18:29:05+02:00
 */



import React, { Component } from 'react'
import Header from './parts/Header'
import './App.css'
import openSocket from 'socket.io-client'

class App extends Component {
  constructor(props){
    super(props)
      this.state = {
        status: 'disconnected',
        title: ''
      }
    this.connect = this.connect.bind(this)
    this.disconnect = this.disconnect.bind(this)
    this.welcome = this.welcome.bind(this)
  }

  componentWillMount(){
    this.socket = openSocket('http://localhost:3000')
    this.socket.on('connect',this.connect)
    this.socket.on('disconnect',this.disconnect)
    this.socket.on('welcome', this.welcome)
  }
  connect(){
    this.setState({ status: 'connected'})
  }

  disconnect(){
    this.setState({status: 'disconnect'})
  }
  welcome(serverState){
    this.setState({title:serverState.title})
  }
  render() {
    return (
      <div className="App">
        <Header title={this.state.title} />
        
      </div>
    );
  }
}

export default App
