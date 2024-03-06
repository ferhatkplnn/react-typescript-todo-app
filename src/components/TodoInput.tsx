import React, { ChangeEvent } from "react";
import "./styles/todoInput.scss";

interface TodoInputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ todo, setTodo, handleAdd }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  return (
    <form className="todo-form" onSubmit={handleAdd}>
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
