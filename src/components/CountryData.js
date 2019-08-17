import React from 'react';

const CountryData = ({store, country}) => {
    // const chosenCountry = store.getState().countries[0];

    return(
        <>
            <p>Name: {country.name} </p>
            <p>Capital: {country.capital}</p>
        </>
    );
}

export default CountryData;
