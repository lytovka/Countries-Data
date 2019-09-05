import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search from './components/Search';
import Countries from './components/Countries';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

function App() {

  const classes = useStyles();

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

export default App;
