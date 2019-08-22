import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#eeeeee",
        height: "auto",
    },
}));

const CountryData = ({ country, store }) => {

    const classes = useStyles()
    console.log(country);
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <div className={classes.root}>
                    <p>Name: {country.name} </p>
                    <p>Capital: {country.capital}</p>
                    <CustomButton store={store} name={"go back"} />
                </div>
            </Container>
        </>
    );
}

export default CountryData;
