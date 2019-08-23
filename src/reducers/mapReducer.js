const initialMapView = {
    latitude: 0,
    longitude: 0,
    width: "auto",
    height: "30vh",
    zoom: 1,
};

const mapReducer = (state = initialMapView, action) => {
    switch (action.type) {
        case "NEW_MAP_VIEW":
            const newMap = {
                ...state,
                latitude: action.data.country.latlng[0],
                longitude: action.data.country.latlng[1],
            }
            return newMap;
        default:
            return state;
    }
}

export const mapAction = (country) => {
    return {
        type: "NEW_MAP_VIEW",
        data: { country },
    }
}

export default mapReducer;