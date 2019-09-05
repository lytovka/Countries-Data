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
            return action.map;
        default:
            return state;
    }
}

export const mapAction = (map) => {
    return {
        type: "NEW_MAP_VIEW",
        map,
    }
}

export default mapReducer;