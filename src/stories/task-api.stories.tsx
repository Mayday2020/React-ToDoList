import React, {useEffect, useState} from 'react'
import {taskApi} from "../api/task-api";

export default {
    title: 'Task-API'
}

export const GetTasks = () => {
    let [tasks, setTasks] = useState<any>(null)
    useEffect(()=>{
        const todolistId = '47138386-77f9-42e3-b1bd-2fb9a7dbc1fe'
        taskApi.getTasks(todolistId)
            .then((res)=>{

                setTasks(res.data)
            })
    }, [])
    return <div> {JSON.stringify(tasks)} </div>
}
export const CreateTask = () => {
    let [task, setTask] = useState<any>(null)
    useEffect(()=>{
        const taskTitle = "ONE";
        const todolistId = '47138386-77f9-42e3-b1bd-2fb9a7dbc1fe'
        taskApi.createTask(todolistId, taskTitle)
            .then((res)=>{

                setTask(res.data)
            })
    }, [])
    return <div>{JSON.stringify(task)}</div>
}
export const DeleteTask = () => {
    let [task, setTask] = useState<any>(null)
    useEffect(()=>{
        const todolistId = 'e9d96b53-f39c-4e54-bc8c-aa7d2717c9b3'
        const taskId = ''
        taskApi.deleteTask(todolistId, taskId)
            .then((res)=>{
                setTask(res.data)
            })
    }, [])
    return <div>{JSON.stringify(task)}</div>
}
export const UpdateTaskTitle = () => {
    let [task, setTask] = useState<any>(null)
    useEffect(()=>{
        const todolistId = 'e9d96b53-f39c-4e54-bc8c-aa7d2717c9b3'
        const taskId = ''
        const taskTitle = 'new task title'
        taskApi.updateTitle(todolistId, taskId, taskTitle)
            .then((res)=>{
                setTask(res.data)
            })
    }, [])
    return <div>{JSON.stringify(task)}</div>
}