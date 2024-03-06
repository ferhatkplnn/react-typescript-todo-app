import { useState } from "react";
import TodoInput from "./components/TodoInput";
import { Todo } from "./model";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!todo) return;
    setTodos([...todos, { id: Date.now(), isDone: false, todo }]);
    setTodo("");
  };

  return (
    <div className="App">
      <div className="heading">Todo App</div>
      <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
