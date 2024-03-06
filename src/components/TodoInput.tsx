import React, { ChangeEvent } from "react";
import "./styles/todoInput.scss";

interface TodoInputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const TodoInput: React.FC<TodoInputProps> = ({ todo, setTodo }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form className="todo-form">
      <input
        type="text"
        placeholder="Enter a task"
        className="input"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit" className="add-todo">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
