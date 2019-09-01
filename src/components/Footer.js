import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(3),
        marginTop: 'auto',
        backgroundColor: '#eeeeee',
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <footer className={classes.footer}>
                <Container maxWidth="sm">
                    <Typography variant="body1">Footer</Typography>
                </Container>
            </footer>
        </>
    );
}

export default Footer;