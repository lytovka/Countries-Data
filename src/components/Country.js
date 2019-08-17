import React from 'react';
import { countriesAction } from '../reducers/countriesReducer'
import { searchAction } from '../reducers/searchReducer'

const Country = ({ country, store }) => {

    const handleCountryClick = (country) => {
        // store.dispatch(countriesAction([country]));
        // store.dispatch(searchAction(""));
    }

    return (
        <>
            <p onClick={() => handleCountryClick(country)}>{country}</p>
        </>
    );
}

export default Country
