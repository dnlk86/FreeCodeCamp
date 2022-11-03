const LOGIN = "LOGIN"; // unsing constats for actions and referencing to them elsewhere in the code
const LOGOUT = "LOGOUT";

const defaultState = {
    authenticated: false,
};

const authReducer = (state = defaultState, action) => {
    // reducer function
    switch (action.type) {
        case LOGIN:
            return {
                authenticated: true,
            };
        case LOGOUT:
            return {
                authenticated: false,
            };

        default:
            return state;
    }
};

const store = Redux.createStore(authReducer);
// creating actions
const loginUser = () => {
    return {
        type: LOGIN,
    };
};

const logoutUser = () => {
    return {
        type: LOGOUT,
    };
};
