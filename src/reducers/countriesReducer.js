import serviceCountries from '../services/countries';

const initialCountriesList = [];

const countriesReducer = (state = initialCountriesList, action) => {
    switch (action.type) {
        case "NEW_LIST":
            return [].concat(action.data.newCountriesList);
        case "FIND_COUNTRY":
            const country = state.find(c => c.name === action.countryName)
            return country
        default:
            return state;
    }
}

export const countriesAction = () => {
    return async dispatch => {
        const newCountriesList = await serviceCountries.getAll();
        dispatch({
            type: "NEW_LIST",
            data: { newCountriesList }
        })
    }
}

export const findCountry = (countryName) => {
    return {
        type: "FIND_COUNTRY",
        countryName
    }
}

export default countriesReducer