import React, { useState } from "react";

const Form = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function addTask() {
    let newObj = {
      email,
      password,
      confirm,
      id: Date.now(),
    };
    if (password === confirm) {
      props.handleTask(newObj);
      props.setIsLogin(true);
    } else {
      return alert("Введите правильный пароль");
    }
    props.handleTask(newObj);
  }
  return (
    <div>
      <div
        style={{
          marginTop: "10px",
          display: "flex",
          flexDirection: "column",
          width: "300px",
        }}
      >
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="email"
          value={email}
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
          value={password}
        />
        <input
          onChange={(e) => setConfirm(e.target.value)}
          type="text"
          placeholder="confirm password"
          value={confirm}
        />
        <button onClick={() => addTask()}>Регистарция</button>
      </div>
    </div>
  );
};

export default Form;
