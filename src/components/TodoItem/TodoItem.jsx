import React from "react";
import "./TodoItem.css";

function TodoItem(props) {
    const { todo, index, completeTodo, removeTodo, when } = props;
    return (
    
    <div className="todo">
        
        <div className={`todo${todo.isCompleted ? "complete" : ""}`}>{todo.text}
        </div>
        <div>
        <button onClick={() => completeTodo(index)}>Complete</button> 
        <button onClick={() => removeTodo(index)}>x</button>
        </div>
    </div>
    
    
    )   
}

export default TodoItem;