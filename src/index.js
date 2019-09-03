import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { createStore, combineReducers } from "redux";
import searchReducer from "./reducers/searchReducer";
import countriesReducer from "./reducers/countriesReducer";
import mapReducer from "./reducers/mapReducer";


const reducer = combineReducers({
    search: searchReducer,
    countries: countriesReducer,
    map: mapReducer,
})

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(<Provider store={store}><Router><App store={store} /></Router></Provider>, document.getElementById('root'));
}

render();
store.subscribe(render);

