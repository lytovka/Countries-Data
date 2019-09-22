import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Search from './components/Search';
import Countries from './components/Countries';
import Footer from './components/Footer';
import { countriesAction } from './reducers/countriesReducer';
import { appStyles } from './styles/styles';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

function App(props) {

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    props.countriesAction();
    setShowContent(true);
  }, []);

  const classes = appStyles();

  return (
    <>
      {showContent ?
        <Router>
          <Switch>
            <Route exact path="/home" render={() =>
              <div className={classes.root}>
                <Search />
                <Countries />
                <Footer />
              </div>} />
          </Switch>
        </Router>
        : <div></div>
      }

    </>
  );
}

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  }
}

export default connect(
  mapStateToProps,
  { countriesAction },
)(App)
