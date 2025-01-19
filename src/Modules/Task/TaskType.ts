import {Observable} from "rxjs";

export type TaskType = { id: number; title: string; done: boolean };

export interface TaskServiceInterface {
  createObject: (title: string) => TaskType
  add: (todo: TaskType) => void
  toggleCheck: (id: number) => void
  delete: (id: number) => void
  deleteChecked: () => void
  deleteAll: () => void
  toggleCheckAll: (check: boolean) => void
  isAllChecked: () => Observable<boolean>
}

export enum TaskModuleName {
    TASK_SERVICE = "taskService",
    TASK_STORE = "taskStore",
}
