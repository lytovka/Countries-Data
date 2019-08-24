import React from 'react';
import { searchAction } from '../reducers/searchReducer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
    defaultRoot: {
        marginTop: "auto",
    },
    root: {
        marginTop: 10,
    },
    textField: {
        width: "20rem",
    },
}));

const Search = ({ store }) => {

    const classes = useStyles();

    const search = store.getState().search;
    const countries = search === "" ? store.getState().countries :
        store.getState().countries
            .filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const handleOnChange = (event) => {
        console.log(event.target.value);
        store.dispatch(searchAction("SEARCH", event.target.value));
    }

    const displaySearchField = () => {
        return (
            <>
                <div className={search === "" ? classes.defaultRoot : classes.root}>
                    <Grid container justify="center" direction="row">
                        <Grid item>
                            <TextField
                                id="margin-normal"
                                value={search}
                                className={classes.textField}
                                onChange={handleOnChange}
                                placeholder="Type a country..."
                                variant="outlined"
                                autoComplete="off"
                            />
                        </Grid>
                    </Grid>
                </div>
            </>
        );
    }

    return (
        <>
            {countries.length !== 1 ? displaySearchField() : ""}
        </>
    );
}

export default Search