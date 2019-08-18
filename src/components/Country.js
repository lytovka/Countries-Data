import React from 'react';
import { searchAction } from '../reducers/searchReducer';

const Country = ({ country, store }) => {

    const handleCountryClick = (country) => {
        store.dispatch(searchAction(country));
    }
    const style = {
        width: 150
    }
    return (
        <div onClick={() => handleCountryClick(country.name)}>
            <img src={country.flag} style={style} alt={"flag of " + country.name}/>
            <p>{country.name}</p>
        </div>
    );
}

export default Country
