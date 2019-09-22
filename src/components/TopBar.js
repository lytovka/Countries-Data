import React from 'react';
import { connect } from 'react-redux';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import HelpIcon from '@material-ui/icons/Help';
import { searchAction } from '../reducers/searchReducer';
import { topBarStyles } from '../styles/styles';

const TopBar = ({ caption, searchAction }) => {

    const classes = topBarStyles();

    const handleArrowBackClick = () => {
        searchAction("SET_TO_DEFAULT", "");
    }

    return (
        <div className={classes.root}>
            <AppBar>
                <Container maxWidth="md">
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={handleArrowBackClick}
                        >
                            <ArrowBackIcon />
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            {caption}
                        </Typography>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            href={`https://en.wikipedia.org/wiki/${caption}`}
                        >
                            <HelpIcon />
                        </IconButton>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );

}

export default connect(
    null,
    { searchAction }
)(TopBar)