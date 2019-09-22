import thunk from 'redux-thunk'
import { createStore, combineReducers, applyMiddleware } from "redux";
import searchReducer from "./reducers/searchReducer";
import countriesReducer from "./reducers/countriesReducer";
import mapReducer from "./reducers/mapReducer";
import holidaysReducer from "./reducers/holidaysReducer";

const reducer = combineReducers({
    search: searchReducer,
    countries: countriesReducer,
    map: mapReducer,
    holidays: holidaysReducer
})

const store = createStore(reducer, applyMiddleware(thunk))

export default store