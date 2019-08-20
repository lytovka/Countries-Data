import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const CountryData = ({ country, store }) => {
    console.log(country);
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <p>Name: {country.name} </p>
                <br />
                <p>Capital: {country.capital}</p>
                <CustomButton store={store} name={"go back"} />
            </Container>
        </>
    );
}

export default CountryData;
