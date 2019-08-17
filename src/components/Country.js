import React from 'react';
import { countriesAction } from '../reducers/countriesReducer'
import { searchAction } from '../reducers/searchReducer'

const Country = ({ country, store }) => {

    const handleCountryClick = (country) => {
        store.dispatch(searchAction(country));
    }
    return (
        <>
            <p onClick={() => handleCountryClick(country)}>{country}</p>
        </>
    );
}

export default Country
