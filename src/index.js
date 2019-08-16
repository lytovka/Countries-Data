import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, combineReducers } from "redux"
import searchReducer from "./reducers/searchReducer"
import countriesReducer from "./reducers/countriesReducer"


const reducer = combineReducers({
    search: searchReducer,
    countries: countriesReducer
})

const store = createStore(reducer)

const render = () => {
    ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

render();
store.subscribe(render);

