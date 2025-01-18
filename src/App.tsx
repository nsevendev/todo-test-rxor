import { useState } from "react";
import { Input } from "./Components/Input.tsx";
import { TaskList } from "./Components/TaskList.tsx";
import { rxservice } from "rxor";
import { TaskService } from "./Modules/Task/TaskService.ts";

export const App = () => {
  const [value, setValue] = useState("");
  return (
    <div className={"flex flex-col items-center w-4/5 m-auto py-10"}>
      <h1 className={"text-6xl font-bold mb-20"}>My Todo</h1>
      <form>
        <Input
          id={"1"}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button
          className={"ml-4 px-4 py-1 bg-blue-500 rounded-md text-sm"}
          type="button"
          onClick={() =>
            rxservice<TaskService>("taskService").addTask(
              rxservice<TaskService>("taskService").createObjectTask(value)
            )
          }
        >
          Ajouter
        </button>
      </form>
      <TaskList />
    </div>
  );
};
