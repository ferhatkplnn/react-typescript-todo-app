import "./styles/todoInput.scss";

type TodoInputProps = {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
};

const TodoInput = ({ todo, setTodo }: TodoInputProps) => {
  return (
    <form className="todo-form">
      <input placeholder="Enter a task" className="input" />
      <button type="submit" className="add-todo">
        Add
      </button>
    </form>
  );
};

export default TodoInput;
