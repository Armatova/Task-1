import React, { useState } from "react";
import Counter from "./Components/Counter/Counter";
import Form from "./Components/Form/Form";
import FormList from "./Components/FormList/FormList";
import Receipts from "./Components/Meal/Receipts";

const App = () => {
  const [task, setTask] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  function handleTask(newObj) {
    let newTodos = [...task];
    newTodos.push(newObj);
    setTask(newTodos);
  }
  return (
    <div>
      <Counter />
      <Receipts />
      {isLogin ? (
        <FormList setIsLogin={setIsLogin} task={task} />
      ) : (
        <Form handleTask={handleTask} setIsLogin={setIsLogin} />
      )}
    </div>
  );
};

export default App;
