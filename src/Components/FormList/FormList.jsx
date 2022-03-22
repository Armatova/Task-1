import React from "react";

const FormList = (props) => {
  return (
    <div>
      {props.task.map((item) => (
        <div key={item.id}>
          <h1>Добро пожаловать {item.email}</h1>
          <button onClick={() => props.setIsLogin(false)}>Выйти</button>
        </div>
      ))}
    </div>
  );
};

export default FormList;
