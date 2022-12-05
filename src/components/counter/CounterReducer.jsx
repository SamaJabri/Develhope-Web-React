const initialValue = 0;

const INCREMENT = "COUNTER@INCREMENT";
const DECREMENT = "COUNTER@DECREMENT";
const RESET = "COUNTER@RESET";

function incrementCounter(by = 1) {
  return {
    type: INCREMENT,
    payload: by,
  };
}

function decrementCounter(by = 1) {
  return {
    type: DECREMENT,
    payload: by,
  };
}

function reset() {
  return {
    type: DECREMENT,
  };
}

export function counterReducer(state = initialValue, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload;

    case DECREMENT:
      return state - action.payload;

    case RESET:
      return initialValue;

    default:
      return state;
  }
}
