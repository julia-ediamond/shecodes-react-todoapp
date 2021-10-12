import React from "react";

function TodoItem(props) {
    const { todo } = props;
    return <div className="todo">{todo}</div>;
    
    
    
}

export default TodoItem;