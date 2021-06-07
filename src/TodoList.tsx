import React, {FC} from 'react';
import {keyType} from "./App";
import Button from "./components/Button";
import Input from "./components/Input";

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTasks: (id: string)=>void
    changeFilter: (key: keyType)=>void
    addTask: (newTitle: string) => void
}

export function Todolist(props: PropsType) {
    const changeFilterHandlerAll = () => props.changeFilter('All')
    const changeFilterHandlerActive = () => props.changeFilter('Active')
    const changeFilterHandlerCompleted = () => props.changeFilter('Completed')
    return <div>
        <h3>{props.title}</h3>
        <div>
            {/*<Input callBack={(newTitle: string)=>props.addTask(newTitle)}/>*/}
            <Input callBack={props.addTask}/>
            {/*<input/>
            <button>+</button>
            */}
        </div>
        <ul>
            {props.tasks.map((t) => {
                const removeTaskHandler = () => props.removeTasks(t.id)
                return <li key={t.id}>
                    <Button callBack={removeTaskHandler} value={'x'}/>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
                </li>
            })}
        </ul>
        <div>
            <Button callBack={changeFilterHandlerAll} value={'All'}/>
            <Button callBack={changeFilterHandlerActive} value={'Active'}/>
            <Button callBack={changeFilterHandlerCompleted} value={'Completed'}/>
        </div>
    </div>
}
