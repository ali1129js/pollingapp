/**
 * @Author: Ali Ismail
 * @Date:   2018-04-12T13:47:30+02:00
 * @Last modified by:   Ali Ismail
 * @Last modified time: 2018-04-12T13:49:34+02:00
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
