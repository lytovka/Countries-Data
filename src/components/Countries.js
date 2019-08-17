import React, { useEffect } from 'react';
import Country from '../components/Country';
import CountryInfo from '../components/CountryData';
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

    const search = store.getState().search;
    const countries = search === "" ? store.getState().countries :
        store.getState().countries
            .filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const list = () => {
        if (search === "") {
            return (
                <div>
                    <p>Hey there! Discover countries all around the globe!</p>
                </div>
            );
        }
        else if(countries.length > 1){
            return countries.map((country) => {
                return (
                    <Country key={country.name} country={country.name} store={store}/>
                );
            }
            );
        }
        else if(countries.length === 1){
            return(
                <>
                    <CountryInfo store={store} country={countries[0]}/>
                </>
            )
        }
    }
    return (
        <>
            {list()}
        </>
    );
}

export default Countries