import {TaskInterface} from "../types/task";

export const delTaskAction = (payload: TaskInterface) => {
    return { type: "DELETE_TASK_ITEM", payload}
}

export const archiveTaskAction = (payload: TaskInterface) => {
    return { type: "ARCHIVE_TASK_ITEM", payload}
}

export const toggleStatusAction = () => {
    return { type: "TOGGLE_TASK_ITEM"}
}

export const createTaskItemAction = (payload: TaskInterface) => {
    return { type: "ADD_TASK_ITEM", payload}
}

export const editTaskItemAction = (payload: TaskInterface) => {
    return { type: "EDIT_TASK_ITEM", payload}
}
export const updateTaskItemAction = (payload: TaskInterface) => {
    return { type: "UPDATE_TASK_ITEM", payload}
}