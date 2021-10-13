import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo } = props;
    return (
    
    <div className="todo">
        
        <div className={`todo ${todo.isCompleted ? "complete" : ""}`}>{todo.text}
        </div>
        <p>{todo.date}</p>
        <div>
        <button onClick={() => completeTodo(index)}>Complete</button> 
        <button onClick={() => removeTodo(index)}>x</button>
        </div>
    </div>
    
    
    )   
}

export default TodoItem;