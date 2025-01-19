import {TaskModuleName, TaskServiceInterface, TaskType} from "../../Modules/Task/TaskType.ts";
import { rxservice, useRxStore } from "rxor";

export const TaskList = () => {
  const taskList = useRxStore<TaskType[]>(TaskModuleName.TASK_STORE);
  return (
    <div className={"flex flex-col items-center mt-20"}>
      <div>
        {taskList && taskList.length > 0 ? (
          taskList.map((task: TaskType) => (
            <div key={task.id} className={"flex justify-start items-center mb-10"}>
              <input
                type="checkbox"
                id={`${task.id}`}
                checked={task.done || false}
                onChange={() =>
                  rxservice<TaskServiceInterface>(
                    "taskService"
                  ).toggleCheck(task.id)
                }
                className="cursor-pointer mr-4"
              />
              <label htmlFor={`${task.id}`} className={"text-xl mr-8 cursor-pointer"}>{task.title}</label>
              <button
                className={"text-sm bg-red-500 px-4 h-fit ml-auto rounded"}
                onClick={() =>
                  rxservice<TaskServiceInterface>("taskService").delete(
                    task.id
                  )
                }
              >
                Supprimer
              </button>
            </div>
          ))
        ) : null
        }
      </div>
    </div>
  );
};
