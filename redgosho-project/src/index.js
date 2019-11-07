import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './screens/App';
import * as serviceWorker from './screens/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
