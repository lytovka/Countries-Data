import React, { useState } from 'react';
import ReactMapGl from 'react-map-gl';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CustomButton from './CustomButton';
import TopBar from '../components/TopBar';

const useStyles = makeStyles(theme => ({
    root: {
        height: "auto",
    },
}));

const CountryData = ({ country }) => {

    const [map, setMap] = useState({
        latitude: country.latlng[0],
        longitude: country.latlng[1],
        width: "100%",
        height: "30vh",
        zoom: country.area ? 3 : 5,
    })

    const classes = useStyles();

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
                <Paper className={classes.root}>
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

export default CountryData;
