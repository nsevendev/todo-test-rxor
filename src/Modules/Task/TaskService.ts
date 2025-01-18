import { ReaService, ReaXor } from "rxor";
import { TaskServiceInterface, TaskType } from "./TaskType.ts";

export class TaskService extends ReaService<TaskServiceInterface> {
  private readonly taskList: ReaXor<TaskType[]>;

  constructor(taskList: ReaXor<TaskType[]>) {
    super("taskService");
    this.taskList = taskList;
  }

  getTaskStore = (): ReaXor<TaskType[]> => {
    return this.taskList;
  };

  createObjectTask = (title: string): TaskType => {
    return {
      id: this.generateUniqueId(),
      title,
      done: false,
    } as TaskType;
  };

  addTask = (task: TaskType): void => {
    this.taskList.value = [...this.taskList.value, task];
  };

  toggleCheckTask = (id: number): void => {
    this.taskList.value = this.taskList.value.map((todo: TaskType) =>
      todo.id === id ? { ...todo, done: !todo.done } : todo
    );
  };

  removeTask = (id: number): void => {
    this.taskList.value = this.taskList.value.filter(
      (task: TaskType) => task.id !== id
    );
  };

  private generateUniqueId = (): number => {
    let id: number;
    do {
      id = Math.floor(Math.random() * 1_000_000);
    } while (this.taskList.value.some((task: TaskType) => task.id === id));
    return id;
  };
}
