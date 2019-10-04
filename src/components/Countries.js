import React from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Country from '../components/Country';
import CountryData from '../components/CountryData';
import { countriesAction } from '../reducers/countriesReducer';
import { countriesStyles } from '../styles/styles';

const Countries = (props) => {

    const classes = countriesStyles();

    const search = props.search;
    const countries = search === "" ? props.countries :
        props.countries
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
                                    <Country key={country.name} country={country} />
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
        const countryObj = props.countries.filter(c => c.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase()))[0];
        return showCountryData(countryObj);
    }

    const showCountryData = (country) => {
        return (
            <>
                <CountryData country={country} />
            </>
        )
    }

    return (
        <>
            {
                countries.length === 1 ?
                    showCountryData(countries[0]) :
                    list()
            }
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        countries: state.countries
    }
}

export default connect(
    mapStateToProps,
    { countriesAction }
)(Countries)