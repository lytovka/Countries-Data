const initialSearchField = "";

const searchReducer = (state = initialSearchField, action) => {
    switch (action.type) {
        case "SEARCH":
            return action.data.search;
        default:
            return state;
    }
}

export const searchAction = (search) => {
    return {
        type: "SEARCH",
        data: { search }
    }
}

export default searchReducer