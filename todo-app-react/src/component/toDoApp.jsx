import { useState } from "react";

function ToDoApp() {

    function handleSubmit (){
        console.log("Hello")
    }

    return (
        <div className="todo-app">
            <h2>To-Do List <img src="icon.png" alt = "image of icon" /></h2>
            <div className="row">
                <input type="text" id="input-box" placeholder="Add your text" />
                <button onClick={handleSubmit}>Add</button>
            </div>
            <ul id="list-container">
            </ul>
        </div>
    )
}

export default ToDoApp