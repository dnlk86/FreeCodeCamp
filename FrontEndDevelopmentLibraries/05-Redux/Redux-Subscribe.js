const ADD = "ADD"; // action name

const reducer = (state = 0, action) => {
    switch (action.type) {
        case ADD:
            return state + 1;
        default:
            return state;
    }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

store.subscribe(() => count++); // everytime store.dispatch is called, the callback of store.subscribe is also called.

store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
store.dispatch({ type: ADD });
console.log(count);
