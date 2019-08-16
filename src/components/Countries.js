import React, { useEffect } from 'react';
import Country from '../components/Country';
import { countriesAction } from '../reducers/countriesReducer'
import serviceCountries from '../services/countries';

const Countries = ({ store }) => {

    useEffect(() => {
        async function fetchData() {
            const countriesList = await serviceCountries.getAll();
            store.dispatch(countriesAction(countriesList));
            // console.log(countriesList.map(c => c.name));
        }
        fetchData();
    }, []);

    const countries = store.getState().countries.map(country => country.map(c => c.name));

    const list = () => {
        // console.log(store.getState().countries.map(c => c.map(ca => ca.name)));
        console.log(countries);
    }

    return (
        <div>
            <ul>
                {
                    countries.map(country =>
                        <Country key={country} country={country} />
                    )
                }
            </ul>
        </div>
    );
}

export default Countries