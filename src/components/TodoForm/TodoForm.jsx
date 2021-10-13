import React, { useState } from "react";
function TodoForm(props) {
    //DESTRUCTURE
    const { addTodo } = props;
    const [value, setValue] = useState("");
    const [dueDate, setDueDate] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }
        addTodo(value);
        setValue("");
    };
    return (
    <form>
    <input 
    value={value}
    type="text" 
    placeholder="Add Todo..." 
    //event.target.value??
    //The target event property returns the html element that triggered the event. value of theat element
    onChange={(event) => setValue(event.target.value)}
    />
    <input 
    value={dueDate}
    type="date" 
    onChange={(event) => {
        console.log(event)
        setDueDate(event.target.value)
    }}

    />
    <button onSubmit={handleSubmit}> Add todo </button>





    </form>
    );
    
}
    
    
    export default TodoForm;