import React from 'react';

const CountryData = ({ country }) => {
    console.log(country);
    return (
        <>
            <p>Name: {country.name} </p>
            <br/>
            <p>Capital: {country.capital}</p>
        </>
    );
}

export default CountryData;
