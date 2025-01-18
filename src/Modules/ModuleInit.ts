import {ReaXor} from "rxor";
import {TaskType} from "./Task/TaskType.ts";
import {TaskService} from "./Task/TaskService.ts";

export const moduleInit = () => {
    const taskList = ReaXor.create<TaskType[]>([], "taskStore");
    new TaskService(taskList)
}
