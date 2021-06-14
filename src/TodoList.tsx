import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    filter: string
    isDoneChange: (id: string,
                   isDone: boolean)=> void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)
    const addTask = () => {
        if (title.trim()){
            props.addTask(title.trim());

        } else {
            setError('Title is required')
        }
        setTitle("");
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onFilterClickHandler = (filterValue: FilterValuesType)=>{
        return ()=>{props.changeFilter(filterValue)}
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   className={error ? 'error': ''}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
            {error && <div className={error ? 'error_message': ''}>{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    const isDoneHandler = (event: ChangeEvent<HTMLInputElement>) => {
                        props.isDoneChange(t.id, event.currentTarget.checked)
                    }
                    return <li key={t.id}>
                        <input type="checkbox" checked={t.isDone} onChange={isDoneHandler}/>
                        <span className={t.isDone? 'is_done': ''}>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all'? 'active_filter': ''} onClick={onFilterClickHandler('all')}>All</button>
            <button className={props.filter === 'active'? 'active_filter': ''}onClick={onFilterClickHandler('active')}>Active</button>
            <button className={props.filter === 'completed'? 'active_filter': ''} onClick={onFilterClickHandler('completed')}>Completed</button>
        </div>
    </div>
}
