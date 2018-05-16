import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Board} from './components';
import 'typeface-roboto'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Board />, document.getElementById('root'));
registerServiceWorker();
