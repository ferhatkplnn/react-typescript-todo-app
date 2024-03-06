import React, { ChangeEvent, useRef } from "react";
import "./styles/todoInput.scss";

interface TodoInputProps {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: () => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ todo, setTodo, handleAdd }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setTodo(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleAdd();
    inputRef?.current?.blur();
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task"
        className="input"
        value={todo}
        onChange={handleChange}
        ref={inputRef}
      />
      <button type="submit" className="add-todo">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
