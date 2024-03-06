import React, { useState } from "react";
import TodoInput from "./components/TodoInput";

const App = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <div className="heading">Todo App</div>
      <TodoInput todo={todo} setTodo={setTodo} />
    </div>
  );
};

export default App;
