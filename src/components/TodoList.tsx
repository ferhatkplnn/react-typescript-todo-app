import React from "react";
import { Todo } from "../model";
import "./styles/todoList.scss";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <li className="todo-item" key={todo.id}>
          {todo.todo}
        </li>
      ))}
    </div>
  );
};

export default TodoList;
