import React from 'react';
import CustomButton from './CustomButton';

const CountryData = ({ country, store }) => {
    console.log(country);
    return (
        <>
            <p>Name: {country.name} </p>
            <br />
            <p>Capital: {country.capital}</p>
            <CustomButton store={store} name={"go back"} />
        </>
    );
}

export default CountryData;
