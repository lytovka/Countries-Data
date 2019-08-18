import React from 'react';
import Search from './components/Search';
import Countries from './components/Countries';

function App({ store }) {

  return (
    <>
      <Search store={store} />
      <Countries store={store} />
    </>
  );
}

export default App;
