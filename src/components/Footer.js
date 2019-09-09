import React from 'react';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { footerStyles } from '../styles/styles';


const Footer = () => {
    const classes = footerStyles();
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