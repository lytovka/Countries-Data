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

const CountryData = ({ country, store }) => {

    const classes = useStyles()
    console.log(country);

    const mapObj = {
        latitude: country.latlng[0],
        longitude: country.latlng[1],
        width: "auto",
        height: "30vh",
        zoom: 3
    };

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <ReactMapGl
                    {...mapObj}
                    mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_KEY}
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
