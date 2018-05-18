import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto'
import registerServiceWorker from './registerServiceWorker';
import AppRouter from './Router/AppRouter';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
