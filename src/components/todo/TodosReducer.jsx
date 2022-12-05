const initalTodoList = [];

const ADD = "TODO@ADD";
const DELETE = "TODO@DELETE";
const EDIT = "TODO@EDIT";

function addTodo({ id, title, completed }) {
  return {
    type: ADD,
    payload: {
      id,
      title,
      completed,
    },
  };
}

function deleteTodo(id) {
  return {
    type: DELETE,
    payload: id,
  };
}

function editTodo(id, data) {
  return {
    type: EDIT,
    payload: {
      id,
      data,
    },
  };
}

function todoReducer(state = initalTodoList, action) {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];

    case DELETE:
      return state.filter((todo) => todo.id !== action.payload);

    case EDIT:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, ...action.payload.data };
        }
        return todo;
      });

    default:
      return state;
  }
}

export { addTodo, deleteTodo, editTodo, todoReducer };
