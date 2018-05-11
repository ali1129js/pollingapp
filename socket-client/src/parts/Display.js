/**
 * @Author: Ali Ismail
 * @Date:   2018-04-12T19:52:46+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-12T20:03:40+02:00
 */
import React, { Component } from 'react'
class Display extends Component {
  rener(){
    return (
    this.props.if ? <div> {this.props.children} </div> : null
    )
  }
}
export default Display



 /*
Examples:
 if (condition) {
   return "The Condition is true"
 } else {
   return "The Condition is false"
 }
 return ( condition ? "The Condition is true" : "The Condition is false" )
 <Display if={true}>
    <h1> This Will be shown </h1>
 </Display>
 */
