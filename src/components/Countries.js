import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Country from '../components/Country';
import CountryData from '../components/CountryData';
import { countriesAction } from '../reducers/countriesReducer'
import serviceCountries from '../services/countries';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    text:{
        textAlign:'center',
    },
    paper: {
        width: '20rem',
        height: '10rem',
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Countries = ({ store }) => {

    const classes = useStyles();

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
                <div className={classes.text}>
                    <p>Hey there! Discover countries all around the globe!</p>
                </div>
            );
        }
        else if (countries.length > 15) {
            return (
                <div className={classes.text}>
                    <p>Too many matches, keep typing...</p>
                </div>
            )
        }
        else if (countries.length > 1) {
            // console.log(countries.length);
            return (
                <>
                    <div className={classes.root}>
                        <Grid container align="center" justify="center" direction="row" spacing={0}>
                            {countries.map((country) => {
                                return (
                                    <Grid key={country.name} item xs={4}>
                                        <Paper className={classes.paper}>
                                            <Country country={country} store={store} />
                                        </Paper>
                                    </Grid>
                                )
                            })
                            }
                        </Grid>
                    </div>
                </>
            )
        }
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