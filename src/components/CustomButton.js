import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { searchAction } from '../reducers/searchReducer';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: "80%",
    }
}))

const CustomButton = ({ name, store }) => {
    const classes = useStyles();

    const handleButtonClick = () => {
        store.dispatch(searchAction("SET_TO_DEFAULT", ""));
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

export default CustomButton;