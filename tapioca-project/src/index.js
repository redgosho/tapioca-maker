import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Title from './screens/Title';
import * as serviceWorker from './screens/serviceWorker';

ReactDOM.render(<Title />, document.getElementById('root'));
serviceWorker.unregister();
