// ACTION CONSTANTS
const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

// ACTION FUNCTIONS
const requestingData = () => {
    return { type: REQUESTING_DATA };
};
const receivedData = (data) => {
    return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
    return function (dispatch) {
        // Dispatch request action here
        store.dispatch(requestingData());

        setTimeout(function () {
            let data = {
                users: ["Jeff", "William", "Alice"],
            };
            // Dispatch received data action here
            store.dispatch(receivedData(data));
        }, 2500);
    };
};

// DEFAULT STATE
const defaultState = {
    fetching: false,
    users: [],
};

// REDUCER FUNCTION
const asyncDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case REQUESTING_DATA:
            return {
                fetching: true,
                users: [],
            };
        case RECEIVED_DATA:
            return {
                fetching: false,
                users: action.users,
            };
        default:
            return state;
    }
};

// CREATE STORE FUNCTION
const store = Redux.createStore(
    asyncDataReducer,
    Redux.applyMiddleware(ReduxThunk.default) // SECOND OPTIONAL ARGUMENT THAT ALLOWS TO USE THUNK
);
