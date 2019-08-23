import React, {useState} from 'react';
import ReactMapGl from 'react-map-gl';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { mapAction } from '../reducers/mapReducer';
import CustomButton from './CustomButton';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "#eeeeee",
        height: "auto",
    },
}));


const CountryData = ({ country, store }) => {

    const [map, setMap] = useState({
        latitude: country.latlng[0],
        longitude: country.latlng[1],
        width: "auto",
        height: "30vh",
        zoom: 3,
    })

    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <Container maxWidth="md">
                <ReactMapGl
                    {...map}
                    mapStyle="mapbox://styles/lytovka/cjzoa990q2hd71co6gvj21naq"
                    onViewportChange={(map) => setMap(map)}
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
