import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type keyType = "All" | "Completed" | "Active"
function App() {
    const changeFilter = (key: keyType)=>{
        setFilter(key)
    }
    let [tasks1, setTasks1]=useState([
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "ReactJS", isDone: false },
        { id: v1(), title: "Babel", isDone: false },
        { id: v1(), title: "Git", isDone: true },
        { id: v1(), title: "Redux", isDone: false }]
    )
    const addTask =(newTitle: string)=>{
        let newTask = { id: v1(), title: newTitle, isDone: false }
        setTasks1([newTask, ...tasks1])
    }
    let [filter, setFilter] = useState<keyType>('All')

    let filterValue = tasks1;
    if(filter === "Active"){
        filterValue = tasks1.filter(f => !f.isDone)
    }if(filter === "Completed"){
        filterValue = tasks1.filter(f => f.isDone)
    }
    const removeTasks = (Mid: string) => {
        tasks1 = tasks1.filter(f => f.id!==Mid)
        setTasks1(tasks1)
    }
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={filterValue}
                      addTask={addTask}
                      removeTasks={removeTasks}
                      changeFilter={changeFilter}/>
        </div>
    );
}

export default App;
