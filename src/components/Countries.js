import React, { useEffect } from 'react';
import Country from '../components/Country';
import { countriesAction } from '../reducers/countriesReducer'
import serviceCountries from '../services/countries';

const Countries = ({ store }) => {

    useEffect(() => {
        async function fetchData() {
            const countriesList = await serviceCountries.getAll();
            store.dispatch(countriesAction(countriesList));
            console.log(countriesList);
        }
        fetchData();
    }, []);

    const countries = store.getState().countries;
    const search = store.getState().search;
    console.log(countries);

    const list = () => {
        if (search === "") {
            return (
                <div>
                </div>
            );
        }
        else {
            return countries.map((country) => {
                return (
                    <Country key={country.name} country={country.name} />
                );
            }
            );
        }
    }
    return (
        <>
            {list()}
        </>
    );
}

export default Countries