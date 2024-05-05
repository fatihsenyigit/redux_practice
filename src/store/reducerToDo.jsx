const initialState = {
  todoList: [
    { id: new Date().getTime(), text: "homework", completed: false },
  ],
};

const add = "ADD";
const del = "DEL";
const cmp = "CMP";
const clr = "CLR";

export const reducerToDo = (state = initialState, { type, payload }) => {
  switch (type) {
    case add:
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case clr:
      return initialState;
    case del:
      return {
        todoList: state.todoList.filter((item) => item.id !== payload),
      };
    case cmp:
      return {
        todoList: state.todoList.map((item) => item.id === payload?{...item, completed:!item.completed}:item),
      };
    default:
      return initialState;
  }
};
