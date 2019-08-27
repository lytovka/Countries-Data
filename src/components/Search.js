import React from 'react';
import { searchAction } from '../reducers/searchReducer';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Togglable from '../components/Togglable';

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
    const specialCaseCountries = ["sudan", "ireland", "niger", "dominica", "guinea", "congo"]
    const classes = useStyles();

    const search = store.getState().search;
    const countries = search === "" ? store.getState().countries :
        store.getState().countries
            .filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const handleOnChange = (event) => {
        store.dispatch(searchAction("SEARCH", event.target.value));
    }

    const searchComponent = () => {
        if ((countries.length !== 1 && specialCaseCountries.indexOf(search.toLocaleLowerCase()) === -1)) {
            return (
                <>
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
                </>
            );
        }
        else return (
            <>
            </>
        );
    }

    return (
        <>
            <div className={search === "" ? classes.defaultRoot : classes.root}>
                <Togglable store={store}>
                    {searchComponent()}
                </Togglable>
            </div>
        </>
    );
}

export default Search