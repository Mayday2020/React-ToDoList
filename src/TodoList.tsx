import React, {FC} from 'react';
import {keyType} from "./App";

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: number)=>void
    changeFilter: (key: keyType)=>void
}

export function Todolist(props: PropsType) {
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map(m=> <li key={m.id}>
                <button onClick={()=>props.removeTasks(m.id)}>X</button>
                <input type="checkbox" checked={m.isDone}/>
                <span>{m.title}</span>
            </li>)}
            {/*<li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li>*/}
        </ul>
        <div>
            <button onClick={()=>props.changeFilter('All')}>All</button>
            <button onClick={()=>props.changeFilter('Active')}>Active</button>
            <button onClick={()=>props.changeFilter("Completed")}>Completed</button>
        </div>
    </div>
}
