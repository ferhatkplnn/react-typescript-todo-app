import { useState } from "react";
import TodoInput from "./components/TodoInput";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  console.log(todos);

  const handleAdd = (): void => {
    if (!todo) return;
    setTodos([...todos, { id: Date.now(), isDone: false, todo }]);
    setTodo("");
  };

  return (
    <div className="App">
      <div className="heading">Todo App</div>
      <TodoInput todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
