import React, { useState } from "react";
import "./App.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Enter your todo"
        onChange={event => setValue(event.target.value)}
      ></input>
    </form>
  );
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Record video tutorial for youtube",
      isCompleted: false
    },
    {
      text: "Buy grocery",
      isCompleted: false
    },
    {
      text: "Complete Assignment",
      isCompleted: false
    }
  ]);

  const addTodo = text => {
    const newTodo = [...todos, { text }];
    setTodos(newTodo);
  };
  const completeTodo = index => {
    const newTodo = [...todos];
    if (newTodo[index].isCompleted) {
      newTodo[index].isCompleted = false;
    } else {
      newTodo[index].isCompleted = true;
    }
    setTodos(newTodo);
  };
  const removeTodo = index => {
    const newTodo = [...todos];
    newTodo.splice(index, 1);
    setTodos(newTodo);
  };
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  );
}
export default App;
