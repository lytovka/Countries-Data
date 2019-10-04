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
import "../styles/styles.css";
import { countryCardStyles } from '../styles/styles';

const CountryData = ({ country, holidays, holidaysAction }) => {

    const classes = countryCardStyles();

    const [map, setMap] = useState({
        latitude: country.latlng[0],
        longitude: country.latlng[1],
        zoom: country.area ? 3 : 5,
    })

    const holidaysOfCountry = holidays;

    useEffect(() => {
        // async function fetchData() {
        //     const holidays = await serviceCountries.getCountryHolidays(country.alpha2Code);
        //     console.log(holidays);
        //     holidaysAction("FIND_HOLIDAYS", holidays);
        // }
        // // fetchData();
    }, []);

    return (
        <>
            <CssBaseline />
            <TopBar caption={country.name} />
            <ReactMapGl className="map"
                {...map}
                width={"100vw"}
                height={"30vh"}
                mapStyle="mapbox://styles/lytovka/cjzoa990q2hd71co6gvj21naq"
                onViewportChange={(map) => setMap(map)}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            >
            </ReactMapGl>
            <Container maxWidth="md">
                <h2>Basic info</h2>
                <div id="country-info-wrapper">
                    <div className="item item1">
                        <p>Name: {country.name} </p>
                        <p>Capital: {country.capital ? country.capital : "N/A"}</p>
                        <p>Region: {country.region ? country.region : "N/A"}</p>
                    </div>
                    <div className="item item2">
                        <p>Population: {country.population ? country.population : "N/A"}</p>
                        <p>Demonym: {country.demonym ? country.demonym : "N/A"}</p>
                        <p>Languages: {country.languages.length > 0 ? country.languages.map(n => n.name).join(", ") : "N/A"}</p>
                    </div>
                    <div className="item item3">
                        <div className="flag-frame">
                            <img className="flag-image" src={country.flag} alt={`flag of ${country.name}`} />
                        </div>
                    </div>

                </div>

                <h3>Holidays</h3>
                <CustomButton name={"go back"} />
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
