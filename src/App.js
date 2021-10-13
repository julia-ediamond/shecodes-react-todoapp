import React, { useState } from "react";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import Date from "./components/Date/Date";
import "./App.css"; 

function App() {
  const [todos, setTodos] = useState([
    {text: "Learn about React",
    isCompleted: false,
    },
    {text: "Meet friend for lunch",
    isCompleted: false,
    },
    {
    text: "Build really cool todo app",
    isCompleted: false,
    }, 
    {
    text: "Go camping",
    isCompleted: false,
    }
  ]);

  const [when, setWhen] = useState (["today", "tomorrow", "next week"])

  //Create a function to add the new todo item to state:
  const addTodo = (text) => {
  //? build new array of todaos, text ?
    const newTodos = [...todos, { text }];
  //push new todos to state
    setTodos(newTodos);
  };
  //function for marking todo items as complete:
  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  //remove todo
  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
  <div className="app">
    <div className="todo-list">
      <h1>My todo list</h1>
      {todos.map((todo, index) => (
    //? todo={todo} provide the value as a prop?
        <TodoItem 
        todo={todo} 
        key={index} 
        index={index}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        />
    ))}

      {when.map((when, index) => (

        <Date when={when} key={index}/>
      ))}


  {/* provide the value as a prop key / reference */}
  <TodoForm addTodo={addTodo} />
  </div>
  </div>
  )
}




export default App;