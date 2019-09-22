import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import ReactMapGl from 'react-map-gl';
import serviceCountries from '../services/countries';
import { holidaysAction } from '../reducers/holidaysReducer';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import CustomButton from './CustomButton';
import TopBar from '../components/TopBar';
import { countryDataStyles } from '../styles/styles';
import "../styles/styles.css";

const CountryData = ({ country, holidays, holidaysAction}) => {

    const [map, setMap] = useState({
        latitude: country.latlng[0],
        longitude: country.latlng[1],
        width: "100%",
        height: "30vh",
        zoom: country.area ? 3 : 5,
    })

    const holidaysOfCountry = holidays;

    useEffect(() => {
        async function fetchData() {
            // console.log("country", country.alpha2Code);
            const holidays = await serviceCountries.getCountryHolidays(country.alpha2Code);
            console.log(holidays);
            holidaysAction("FIND_HOLIDAYS", holidays);
        }
        fetchData();
    }, []);

    const classes = countryDataStyles();

    return (
        <>
            <CssBaseline />
            <TopBar caption={country.name} />
            <ReactMapGl
                {...map}
                mapStyle="mapbox://styles/lytovka/cjzoa990q2hd71co6gvj21naq"
                onViewportChange={(map) => setMap(map)}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
            </ReactMapGl>
            <Container maxWidth="md">
                <Paper id="country-info-wrapper" className={classes.root}>
                    <p>Name: {country.name} </p>
                    <p>Capital: {country.capital ? country.capital : "N/A"}</p>
                    <p>Region: {country.region ? country.region : "N/A"}</p>
                    <p>Population: {country.population ? country.population : "N/A"}</p>
                    <p>Demonym: {country.demonym ? country.demonym : "N/A"}</p>
                    <p>Border: {country.borders.length > 0 ? country.borders.map(b => b).join(", ") : "N/A"}</p>
                    <CustomButton name={"go back"} />
                </Paper>
            </Container>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        holidays: state.holidays
    }
}
export default connect(
    mapStateToProps,
    { holidaysAction }
)(CountryData)
