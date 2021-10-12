import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css"; 

function App() {
  const [todos, setTodos] = useState([
    "Learn about React", 
    "Meet friend for lunch", 
    "Build really cool todo app",
    "Go camping"
  ]);

  //Create a function to add the new todo item to state:
  const addTodo = (text) => {
    const newTodos = [...todos, text];
    setTodos(newTodos);
  };
  return (
  <div className="app">
    <div className="todo-list">
  <h1>My todo list</h1>
  {todos.map((todo, index) => (
  <TodoItem todo={todo} key={index} />
  ))}
  {/* provide the value as a prop */}
  <TodoForm addTodo={addTodo} />
  </div>
  </div>
  )
}




export default App;