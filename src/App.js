import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Search from './components/Search';
import Countries from './components/Countries';
import Footer from './components/Footer';
import { countriesAction } from './reducers/countriesReducer';
import { appStyles } from './styles/styles';

function App(props) {

  const classes = appStyles();

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
