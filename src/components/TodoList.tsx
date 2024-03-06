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
        {/* todos_heading */}
        <span className="title">Active Tasks</span>
        {todos.map((todo) => {
          if (!todo.isDone) {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            );
          }
        })}
      </div>
      {/* todos remove */}
      <div className="todo-list remove">
        <span className="title">Completed Tasks</span>
        {todos.map((todo) => {
          if (todo.isDone) {
            return (
              <TodoListItem
                key={todo.id}
                todo={todo}
                todos={todos}
                setTodos={setTodos}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default TodoList;
