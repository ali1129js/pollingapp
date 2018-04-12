/**
 * @Author: Ali Ismail
 * @Date:   2018-04-12T13:21:50+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-12T13:37:46+02:00
 */
import React, { Component } from 'react'

class Header extends Component {
  propTypes: {
    title:React.propTypes.string.isRequired
  }
  render() {
    return (
      <header>
        <h1> {this.props.title} </h1>
      </header>
    )
  }
}
export default Header;
