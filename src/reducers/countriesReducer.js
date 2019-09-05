const initialCountriesList = [];

const countriesReducer = (state = initialCountriesList, action) => {
    switch (action.type) {
        case "NEW_LIST":
            return [].concat(action.data.countries);
        case "FIND_COUNTRY":
            const country = state.find(c => c.name === action.countryName)
            return country
        default:
            return state;
    }
}

export const countriesAction = (countries) => {
    return {
        type: "NEW_LIST",
        data: { countries }
    }
}

export const findCountry = (countryName) => {
    return {
        type: "FIND_COUNTRY",
        countryName
    }
}

export default countriesReducer