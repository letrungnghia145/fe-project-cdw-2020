import { LOGIN } from "../contants";
let initialState = {
    credentials: null,
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN: {
            state.credentials = action.payload;
            return { ...state };
        }

        default:
            return state;
    }
};

export default userReducer;
