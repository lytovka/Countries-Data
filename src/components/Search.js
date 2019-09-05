import React from 'react';
import { connect } from 'react-redux';
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

const Search = (props) => {
    const specialCaseCountries = ["sudan", "ireland", "niger", "dominica", "guinea", "congo"]
    const classes = useStyles();

    const search = props.search;
    const countries = search === "" ? props.countries :
        props.countries
            .filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));

    const handleOnChange = (event) => {
        props.searchAction("SEARCH", event.target.value);
    }

    const searchComponent = () => {
        if ((countries.length !== 1 && specialCaseCountries.indexOf(search.toLocaleLowerCase()) === -1)) {
            return (
                <>
                    <Grid container justify="center" direction="row">
                        <Grid item>
                            <TextField
                                id="margin-normal"
                                style={{ textAlign: "right" }}
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
                <Togglable store={props.store}>
                    {searchComponent()}
                </Togglable>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        countries: state.countries
    }
}
export default connect(
    mapStateToProps,
    { searchAction }
)(Search)

