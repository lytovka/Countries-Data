import { makeStyles } from '@material-ui/core/styles';

export const useStylesForCountries = makeStyles(theme => ({
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