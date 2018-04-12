/**
 * @Author: Ali Ismail
 * @Date:   2018-04-12T13:47:30+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-12T18:16:40+02:00
 */
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const Router = require('react-router');
const Route = Router.Route
const DefaultRoute = Router.DefaultRoute
const Audience = require('../src/parts/Audience')
const Board = require('../src/parts/Board')
const Speaker = require('../src/parts/Speaker')

const routes = (
  <Route handler={App}>
    <DefaultRoute handler={Audience} />
    <Route name="speaker" path="../src/parts/speaker" handler={Speaker}></Route>
    <Route name="board" path='../src/parts/board' handler={Board}></Route>
  </Route>
)



Router.run(routes,function(handler){
  ReactDOM.render(<App />, document.getElementById('root'))

})
registerServiceWorker()
