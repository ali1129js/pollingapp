/**
 * @Author: Ali Ismail
 * @Date:   2018-04-12T14:03:23+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-12T20:05:58+02:00
 */
import React, { Component } from 'react'
import Display from './Display'
class Audience extends Component {
  render(){
    return (
      <Display if{this.props.status === 'connected'}>
        <h1> Join the session </h1>
        </Display>
    )
  }
}
export default Audience
