import React from 'react';
import ReactMapGl from 'react-map-gl';
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

const createMap = (country) => {
    const area = country.area / 1000000;
    return {
        latitude: country.latlng[0],
        longitude: country.latlng[1],
        width: "auto",
        height: "30vh",
        zoom: (1 / area) + 1,
    }
}

const CountryData = ({ country, store }) => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <ReactMapGl
                    {...createMap(country)}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                >
                </ReactMapGl>
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
