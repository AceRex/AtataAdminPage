export function Image1(value) {
    return {
        type: "Image1",
        payload: value
    };
}
export function Image2(value) {
    return {
        type: "Image2",
        payload: value
    };
}
export function Image3(value) {
    return {
        type: "Image3",
        payload: value
    };
}
export function Image4(value) {
    return {
        type: "Image4",
        payload: value
    };
}
export function Image5(value) {
    return {
        type: "Image5",
        payload: value
    };
}

const initialState = {
        activeImage: " "
}

function ShowModalReducer(modal = initialState, action) {
    switch (action.type) {
        case "ShowModal":
            return {
                ...modal,
                showmodal: true,
            };
        default:
            return modal;
    }
}
export default ShowModalReducer;