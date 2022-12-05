import { counterReducer, incrementCounter } from "./counter/CounterReducer";
import { createStore } from "redux";

const store = createStore(counterReducer);

store.subscribe(() => console.log("Current state: " + store.getState()));

store.dispatch(incrementCounter(4));

export { store };
