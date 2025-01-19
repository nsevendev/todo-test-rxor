import { ReaService, ReaXor } from "rxor";
import { TaskServiceInterface, TaskType } from "./TaskType.ts";
import {map, Observable} from "rxjs";

export class TaskService extends ReaService<TaskServiceInterface> {
  private readonly taskList: ReaXor<TaskType[]>;

  constructor(taskList: ReaXor<TaskType[]>) {
    super("taskService");
    this.taskList = taskList;
  }

  getStore = (): ReaXor<TaskType[]> => {
    return this.taskList;
  };

  createObject = (title: string): TaskType => {
    return {
      id: this.generateUniqueId(),
      title,
      done: false,
    } as TaskType;
  };

  add = (task: TaskType): void => {
    this.taskList.value = [...this.taskList.value, task];
  };

  toggleCheck = (id: number): void => {
    this.taskList.value = this.taskList.value.map((todo: TaskType) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  };

  delete = (id: number): void => {
    this.taskList.value = this.taskList.value.filter(
      (task: TaskType) => task.id !== id
    );
  };
  
  deleteChecked = (): void => {
    this.taskList.value = this.taskList.value.filter((todo: TaskType) => !todo.done)
  }
  
  deleteAll = (): void => {
    this.taskList.value = []
  }
  
  toggleCheckAll = (check: boolean = true): void => {
    this.taskList.value = this.taskList.value.map(
        (todo: TaskType) =>
            check ? {...todo, done: true} : {...todo, done: false}
    )
  }
  
  isAllChecked = (): Observable<boolean> => {
    return this.taskList.reaxar.pipe<boolean>(
        map((todos: TaskType[]) => {
          if (todos.length === 0) {
            return false;
          }
          
          return todos.every((todo: TaskType) => todo.done);
        }),
    )
  }

  private generateUniqueId = (): number => {
    let id: number;
    do {
      id = Math.floor(Math.random() * 1_000_000);
    } while (this.taskList.value.some((task: TaskType) => task.id === id));
    return id;
  };
}
