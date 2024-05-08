import { useState } from "react"
import './ToDoList.css'

function ToDoList(){

    const [tasks, setTasks] = useState(["Do breakfast", "go for a walk"])
    const [newTask, setNewTask] = useState([])


    const handleChangeEvent = (event) => {
        setNewTask(event.target.value);
    }
    const addTask = () => {
        if(newTask.trim()!==""){
        setTasks([...tasks, newTask])
        setNewTask("")
        }
    }
    const deleteTask = (index) => {
        setTasks(tasks.filter((_, i) => index!==i))
    }
    const moveTaskUp = (index) => {
        if(index > 0){
        const updatedTasks = [...tasks]
        const temp = updatedTasks[index];
        updatedTasks[index] = updatedTasks[index - 1];
        updatedTasks[index - 1] = temp;
        setTasks(updatedTasks);
        }
    }
    const moveTaskDown = (index) => {
        if(index < tasks.length-1){
            const updatedTasks = [...tasks]
            const temp = updatedTasks[index];
            updatedTasks[index] = updatedTasks[index + 1];
            updatedTasks[index + 1] = temp;
            setTasks(updatedTasks);
        }
    }
    
    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
            <input type="text" id="listInput" 
            value={newTask} onChange={handleChangeEvent}
            placeholder="Enter the task"></input>
            <button className="add-button" onClick={addTask}>Add</button>

            </div>
            <ol>
                {tasks.map((task, index) => 
                <li key={index}>
                    <span className="text">{task}</span>
                    <button className="delete-button"
                        onClick={() => deleteTask(index)}>
                            🧺
                    </button>
                    <button className="movebutton"
                        onClick={()=>moveTaskUp(index)}>
                            👆
                    </button>
                    <button className="movebutton"
                        onClick={()=>moveTaskDown(index)}>
                            👇
                    </button>
                </li>)}
            </ol>
        </div>
    )

}
export default ToDoList