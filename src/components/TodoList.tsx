import React from "react";
import { Todo } from "../model";
import "./styles/todoList.scss";
import TodoListItem from "./TodoListItem";

type TodoListProps = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="container">
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
