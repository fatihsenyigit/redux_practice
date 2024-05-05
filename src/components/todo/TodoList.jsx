import { useSelector } from "react-redux"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const handleClearList = () => {}
  const todoListUI = useSelector((state) => state.reducerToDo.todoList);

  return (
    <div>
      <div>
        {todoListUI?.map((todo) => (
          <TodoItem key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  )
}

export default TodoList
