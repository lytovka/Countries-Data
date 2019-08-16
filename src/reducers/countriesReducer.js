const initialCountriesList = [];

const countriesReducer = (state = initialCountriesList, action) => {
    switch (action.type) {
        case "NEW_LIST":
            return [...state, action.data.countries.name];
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