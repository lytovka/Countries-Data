const initialCountriesList = [];

const countriesReducer = (state = initialCountriesList, action) => {
    switch (action.type) {
        case "NEW_LIST":
            return state.concat(action.data.countries);
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

export default countriesReducer