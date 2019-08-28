import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Country from '../components/Country';
import CountryData from '../components/CountryData';
import { countriesAction } from '../reducers/countriesReducer'
import serviceCountries from '../services/countries';

const useStyles = makeStyles(theme => ({
    root: {
        padding: 20,
    },
    text: {
        textAlign: 'center',
    },
    paper: {
        width: '20rem',
        height: '10rem',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Countries = ({ store }) => {

    const classes = useStyles();

    useEffect(() => {
        const fetchData = async () => {
            const countriesList = await serviceCountries.getAll();
            store.dispatch(countriesAction(countriesList));
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
                <div className={classes.text}>
                    <p>Hey there! Discover countries all around the globe!</p>
                </div>
            );
        }
        else if (search.toLocaleLowerCase() === "sudan" || search.toLocaleLowerCase() === "ireland"
            || search.toLocaleLowerCase() === "dominica" || search.toLocaleLowerCase() === "guinea" || search.toLocaleLowerCase() === "niger" ||
            search.toLocaleLowerCase() === "congo") {
            return displaySpecialCases(search);
        }
        else if (countries.length > 12) {
            return (
                <div className={classes.text}>
                    <p>Too many matches, keep typing...</p>
                </div>
            )
        }
        else if (countries.length > 1) {
            return (
                <>
                    <div className={classes.root}>
                        <Grid container align="center" justify="center" direction="row" spacing={4}>
                            {countries.map((country) => {
                                return (
                                    <Country key={country.name} country={country} store={store} />
                                )
                            })
                            }
                        </Grid>
                    </div>
                </>
            )
        }
        return (
            <div className={classes.text}>
                <p>Sorry, no matches found :(</p>
            </div>
        );
    }

    const displaySpecialCases = (search) => {
        const countryObj = store.getState().countries.filter(c => c.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))[0];
        return showCountryData(countryObj);
    }

    const showCountryData = (country) => {
        return (
            <>
                <CountryData store={store} country={country} />
            </>
        )
    }

    return (
        <>
            {countries.length === 1 ? showCountryData(countries[0]) : list()}
        </>
    );
}

export default Countries