import React, { useEffect } from 'react';
import { countriesAction } from '../reducers/countriesReducer'
import serviceCountries from '../services/countries';

const Countries = ({ store }) => {
    const countries = store.getState().countries;
    
    useEffect(() => {
        async function fetchData() {
            const countriesList = await serviceCountries.getAll();
            store.dispatch(countriesAction(countriesList));
        }
        fetchData();
    }, []);

    return (
        <div>
            <ul>
                {countries.map((country) => {
                    return <li>{country}</li>
                })}
            </ul>
        </div>
    );
}

export default Countries