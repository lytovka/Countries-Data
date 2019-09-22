const holidaysReducer = (state = [], action) => {
    switch (action.type) {
        case "FIND_HOLIDAYS":
            return action.data.holidays;
        case "SET_TO_DEFAULT":
            return [];
        default:
            return state;
    }
}

export const holidaysAction = (type, holidays) => {
    return {
        type,
        data: { holidays }
    }
}

export default holidaysReducer