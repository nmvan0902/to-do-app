import { useState } from "react";

function ToDoApp() {
    const [tasks, setTasks] = useState([]);
    const [newInput, setNewInput] = useState("");
    function handleNewInput(e){
        setNewInput(e.target.value);
    }

    function handleAddTask(){
        setTasks([...tasks, {checked: false, text: newInput}]);
    }

    function handleChecked(index){
        const updateTasks = tasks.map((item, i) => {
            if(index == i){
                item.checked = !item.checked;
            }
            return item;
        })
        setTasks(updateTasks);
    }

    function handleDelete(index){
        const updateTasks = tasks.filter((_, i) => {
            return i !== index;
        })
        setTasks(updateTasks);
    }

    return (
        <div className="todo-app">
            <h2>To-Do List <img src="icon.png" alt = "image of icon" /></h2>
            <div className="row">
                <input type="text" id="input-box" value={newInput} placeholder="Add your text" onChange={handleNewInput}/>
                <button className="addButton" onClick={handleAddTask}>Add</button>
            </div>
            <ul id="list-container">
                {tasks.map((task, index) => 
                    <li key={index}>
                        <div className="content-todo">
                            <img src={task.checked? "checked.png": "unchecked.png"} alt="" onClick={() => handleChecked(index)}/>
                            <p  className={task.checked? "checked":""}>{task.text}</p>
                        </div>
                        <button className="deleteButton" onClick={() => handleDelete(index)}>x</button>
                    </li>
                )}
            </ul>
        </div>
    )
}

export default ToDoApp