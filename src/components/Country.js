import React from 'react';
import { connect } from 'react-redux';
import { searchAction } from '../reducers/searchReducer';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { countryCard } from '../styles/styles';

const Country = ({ country, searchAction }) => {

    const classes = countryCard();

    const handleCountryClick = (country) => {
        searchAction("SEARCH", country);
    }

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
                <div style={{ backgroundColor: "7e57c2" }} onClick={() => handleCountryClick(country.name)}>
                    <img src={country.flag} className={classes.image} alt={"flag of " + country.name} />
                    <p>{country.name}</p>
                </div>
            </Paper>
        </Grid>
    );
}

export default connect(
    null,
    { searchAction }
)(Country)
