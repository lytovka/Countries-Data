import React from 'react';
import { searchAction } from '../reducers/searchReducer'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    textField: {
        width: 400,
    },
}));

const Search = ({ store }) => {

    const classes = useStyles();

    const handleOnChange = (event) => {
        console.log(event.target.value);
        store.dispatch(searchAction("SEARCH",event.target.value));
    }
    return (
        <TextField
            id="standard-bare"
            value={store.getState().search}
            className={classes.textField}
            onChange={handleOnChange}
            placeholder="Type a country..."
            margin="normal"
            variant="outlined"
        />
    );
}

export default Search