import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { searchAction } from '../reducers/searchReducer';
import { buttonStyles } from '../styles/styles';

const CustomButton = ({ name, searchAction }) => {
    const classes = buttonStyles();

    const handleButtonClick = () => {
        searchAction("SET_TO_DEFAULT", "");
    }

    return (
        <>
            <Grid align="center">
                <Button variant="outlined" color="primary" className={classes.button} onClick={handleButtonClick}>
                    {name}
                </Button>
            </Grid>
        </>
    );
}

export default connect(
    null,
    { searchAction }
)(CustomButton)