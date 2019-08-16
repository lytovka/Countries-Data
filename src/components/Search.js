import React from 'react';
import {searchAction} from '../reducers/searchReducer'

const Search = ({store}) => {

    const handleOnChange = (event) => {
        console.log(event.target.value);
        store.dispatch(searchAction(event.target.value));
    }
    return(
        <input type="text" onChange={handleOnChange}></input>
    );
}

export default Search