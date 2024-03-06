import React, { useEffect, useRef, useState } from "react";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { MdOutlineDoneOutline } from "react-icons/md";

import { Todo } from "../model";
import "./styles/todoListItem.scss";

type TodoListItemProps = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  todos,
  setTodos,
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [input, setInput] = useState<string>(todo.todo);
  const editInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isEditing) {
      editInputRef.current?.focus();
    }
  }, [isEditing]);

  const handleDone = (id: number) => {
    const newTodos: Todo[] = todos.map((todo) => {
      if (todo.id == id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleDelete = (id: number) => {
    const filteredTodos = todos.filter((todo) => todo.id !== id);
    setTodos(filteredTodos);
  };

  const handleEdit = (id: number) => {
    setIsEditing(!isEditing);
    if (isEditing) {
      const editingTodos = todos.map((t) => {
        if (t.id === id) {
          return { ...t, todo: input };
        }
        return t;
      });
      setTodos(editingTodos);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="todo-list-item">
      {isEditing ? (
        <input
          type="text"
          className="edit-todo"
          value={input}
          onChange={handleChange}
          ref={editInputRef}
        />
      ) : (
        <span className={`todo-text  ${todo.isDone ? "is-done" : ""}`}>
          {todo.todo}
        </span>
      )}
      <div>
        <span className="icon" onClick={() => handleEdit(todo.id)}>
          <RiEdit2Line />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <MdDeleteOutline />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <MdOutlineDoneOutline />
        </span>
      </div>
    </div>
  );
};

export default TodoListItem;
