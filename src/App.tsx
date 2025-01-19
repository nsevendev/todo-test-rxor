import { TaskList } from "./Components/Task/TaskList.tsx";
import { ButtonActionTask } from "./Components/Task/ButtonActionTask.tsx";
import { AllSelectedTask } from "./Components/Task/AllSelectedTask.tsx";
import { FormAddTask } from "./Components/Task/FormAddTask.tsx";

export const App = () => {
  
  return (
    <div className={"flex flex-col items-center w-4/5 m-auto py-10"}>
      <h1 className={"text-6xl font-bold mb-20"}>My Todo</h1>
        <FormAddTask />
        <ButtonActionTask />
        <AllSelectedTask />
        <TaskList />
    </div>
  );
};
