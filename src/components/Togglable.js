import React from 'react';

const Togglable = ({store, children}) => {

    const search = store.getState().search;
    const countries = search === "" ? store.getState().countries :
        store.getState().countries
            .filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));


    const hideElement = { display: countries.length === 1 ? "none" : "" };

    return (
        <>
            <div style={hideElement}>
                {children}
            </div>
        </>
    );

}

export default Togglable;