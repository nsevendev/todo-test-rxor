export type TaskType = { id: number; title: string; done: boolean };

export interface TaskServiceInterface {
  createObjectTask: (title: string) => TaskType;
  addTask: (todo: TaskType) => void;
  toggleCheckTask: (id: number) => void;
  removeTask: (id: number) => void;
}
