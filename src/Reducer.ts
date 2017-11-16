const appInitialState = { value: "", json: {} };

export const app = (state = appInitialState, action: any) => {
    switch (action.type) {
        case "CHANGE":
            return { ...state, value: action.value };
        case "SEARCH":
            return { ...state, json: action.json };
        default:
            return state;
    }
};
