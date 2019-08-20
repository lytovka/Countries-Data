import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { searchAction } from '../reducers/searchReducer';

const useStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: 400,
    }
}))

const CustomButton = ({ name, store }) => {
    const classes = useStyles();

    const handleButtonClick = () => {
        store.dispatch(searchAction("SET_TO_DEFAULT", ""));
    }

    return (
        <Button variant="outlined" color="primary" className={classes.button} onClick={handleButtonClick}>
            {name}
        </Button>
    );
}

export default CustomButton;