import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useStylesForCountries } from '../styles/styles';
import { searchAction } from '../reducers/searchReducer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: "7e57c2",
    },
    image: {
        width: "10rem",
        borderRadius: "10%",
    },
    paper: {
        width: '15rem',
        height: '10rem',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const Country = ({ country, store }) => {

    const classes = useStyles();

    const handleCountryClick = (country) => {
        store.dispatch(searchAction("SEARCH", country));
    }

    return (
        <Grid item xs={12} sm={12} md={4} lg={3}>
            <Paper className={classes.paper}>
                <div style={{ backgroundColor: "7e57c2" }} onClick={() => handleCountryClick(country.name)}>
                    <img src={country.flag} className={classes.image} alt={"flag of " + country.name} />
                    <p>{country.name}</p>
                </div>
            </Paper>
        </Grid>
    );
}

export default Country
