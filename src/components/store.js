import { counterReducer, incrementCounter } from "./counter/CounterReducer";
import { combineReducers, createStore } from "redux";
import { addTodo, todoReducer, editTodo } from "./todo/TodosReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  counter: counterReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch(incrementCounter(4));
store.dispatch(addTodo({ id: 1, title: "Study Redux", completed: false }));
store.dispatch(addTodo({ id: 2, title: "DBMS Project", completed: false }));
store.dispatch(addTodo({ id: 3, title: "DH exercises", completed: true }));
store.dispatch(editTodo(1, { completed: true }));

export { store };
