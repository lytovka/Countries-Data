import React from 'react';
import { searchAction } from '../reducers/searchReducer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    root:{
        marginTop: 20,
        marginBottom: 20,
    },
    textField: {
        width: 400,
    },
}));

const Search = ({ store }) => {

    const classes = useStyles();

    const handleOnChange = (event) => {
        console.log(event.target.value);
        store.dispatch(searchAction("SEARCH", event.target.value));
    }
    return (
        <>
            <Grid container justify="center" direction="row">
                <Grid item>
                    <TextField
                        id="margin-normal"
                        value={store.getState().search}
                        className={classes.textField}
                        onChange={handleOnChange}
                        placeholder="Type a country..."
                        variant="outlined"
                    />
                </Grid>
            </Grid>
        </>
    );
}

export default Search