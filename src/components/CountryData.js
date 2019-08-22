import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';
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

    const Map = () => {
        return (
            <GoogleMap
                defaultZoom={10}
                defaultCenter={{ lat: country.latlng[0], lng: country.latlng[1] }}
            />
        );
    }

    const WrappedMap = withScriptjs(withGoogleMap(Map));

    const classes = useStyles()
    console.log(country);
    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <div style={{ width: '100vw', height: '30vh' }}>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `100%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                    />
                </div>
                <div className={classes.root}>
                    <p>Name: {country.name} </p>
                    <p>Capital: {country.capital}</p>
                </div>
                <CustomButton store={store} name={"go back"} />
            </Container>
        </>
    );
}

export default CountryData;
