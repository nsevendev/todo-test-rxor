import { TaskServiceInterface, TaskType } from "../Modules/Task/TaskType.ts";
import { rxservice, useRxStore } from "rxor";

export const TaskList = () => {
  const taskList = useRxStore<TaskType[]>("taskStore");
  return (
    <div className={"flex flex-col items-center mt-20"}>
      <div>
        {taskList && taskList.length > 0 ? (
          taskList.map((task: TaskType) => (
            <div key={task.id} className={"flex justify-start mb-8"}>
              <input
                type="checkbox"
                checked={task.done || false}
                onChange={() =>
                  rxservice<TaskServiceInterface>(
                    "taskService"
                  ).toggleCheckTask(task.id)
                }
                className="cursor-pointer mr-4"
              />
              <p className={"text-xl"}>{task.title}</p>
              <button
                className={"text-sm bg-red-500 px-4 ml-4 rounded"}
                onClick={() =>
                  rxservice<TaskServiceInterface>("taskService").removeTask(
                    task.id
                  )
                }
              >
                Supprimer
              </button>
            </div>
          ))
        ) : (
          <p className={"text-center"}>...</p>
        )}
      </div>
    </div>
  );
};
