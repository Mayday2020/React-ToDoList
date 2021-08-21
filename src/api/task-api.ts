import axios from "axios";
type TaskTypeResponse = {
    description: string
    title: string
    status: number
    priority: number
    startDate: string
    deadline: string
    id: string
    todoListId: string
    order: number
    addedDate: string
}
type GetTasksResponse = {
    error: string | null
    totalCount: number
    items: TaskTypeResponse[]
}
type UpdateTaskType = {
    title: string
    description: string
    status: string
    priority: number
    startDate: string
    deadline: string
}
type DeleteTaskResponse = {
    resultCode: number
    messages: string[]
    data: {}
}
export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        "API-KEY": "384f94cc-cf72-4620-8708-46f29f032232"
    }
})

export const taskApi = {
    getTasks(todolistId: string){
        return instance.get<GetTasksResponse>(`todo-lists/${todolistId}/tasks`)
    },
    createTask(todolistId: string, title: string){
        return instance.post(`todo-lists/${todolistId}/tasks`, {title})
    },
    deleteTask(todolistId: string, taskId: string){
        return instance.get<DeleteTaskResponse>(`todo-lists/${todolistId}/tasks/${taskId}`)
    },
    updateTitle(todolistId: string, taskId: string, title: string){
        return instance.put<UpdateTaskType>(`todo-lists/${todolistId}/tasks/${taskId}`, {title})
    }
}