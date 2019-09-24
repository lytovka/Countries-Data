import { makeStyles } from '@material-ui/core/styles';

export const appStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
    },
}));

export const footerStyles = makeStyles(theme => ({
    footer: {
        padding: theme.spacing(3),
        marginTop: 'auto',
        backgroundColor: '#eeeeee',
    },
}));

export const countriesStyles = makeStyles(theme => ({
    root: {
        padding: 20,
    },
    text: {
        textAlign: 'center',
    },
    paper: {
        width: '20rem',
        height: '10rem',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


export const countryCardStyles = makeStyles(theme => ({
    card: {
        backgroundColor: "7e57c2",
    },
    image: {
        width: "10rem",
        borderRadius: "10%",
    },
    paper: {
        width: '15rem',
        height: '10rem',
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const searchStyles = makeStyles(theme => ({
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

export const buttonStyles = makeStyles(theme => ({
    button: {
        margin: theme.spacing(1),
        width: "80%",
    }
}))

export const topBarStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        maxHeight: "5vh",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "center",
    },
}));
