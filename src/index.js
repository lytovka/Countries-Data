import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import store from './store';

const render = () => {
    ReactDOM.render(<Provider store={store}><Router><App store={store} /></Router></Provider>, document.getElementById('root'));
}

render();
store.subscribe(render);

