import React from 'react';
import { connect } from 'react-redux';

const Togglable = (props) => {

    const search = props.search;
    const countries = search === "" ? props.countries :
        props.countries
            .filter(c => c.name.toLocaleLowerCase().includes(search.toLocaleLowerCase()));


    const hideElement = { display: countries.length === 1 ? "none" : "" };

    return (
        <>
            <div style={hideElement}>
                {props.children}
            </div>
        </>
    );

}

const mapStateToProps = (state) => {
    return {
        search: state.search,
        countries: state.countries
    }
}
export default connect(
    mapStateToProps,
    null,
)(Togglable)
