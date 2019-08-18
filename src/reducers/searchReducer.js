const initialSearchField = "";

const searchReducer = (state = initialSearchField, action) => {
    switch (action.type) {
        case "SEARCH":
            return action.data.search;
        case "SET_TO_DEFAULT":
            return initialSearchField;
        default:
            return state;
    }
}

export const searchAction = (type, search) => {
    return {
        type,
        data: { search }
    }
}

export default searchReducer