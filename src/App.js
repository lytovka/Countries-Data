import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Search from './components/Search';
import Countries from './components/Countries';
import Footer from './components/Footer';
import { countriesAction } from './reducers/countriesReducer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function App(props) {

  const classes = useStyles();

  useEffect(() => {
    props.countriesAction();
  }, []);

  return (
    <>
      <div className={classes.root}>
        <Search />
        <Countries />
        <Footer />
      </div>
    </>
  );
}

export default connect(
  null,
  { countriesAction },
)(App)
