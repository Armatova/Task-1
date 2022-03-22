import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }
  function decrement() {
    setCounter(counter - 1);
  }

  return (
    <div>
      <h1> Вы нажали {counter} раз(а)</h1>
      <button onClick={increment} className="btn btn-success">
        +
      </button>
      <button onClick={decrement} className="btn btn-warning">
        -
      </button>
    </div>
  );
};

export default Counter;
