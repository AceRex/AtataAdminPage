export function ShowModal() {
    return {
        type: "ShowModal",
    };
}

const initialState = {
        showmodal: false,
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