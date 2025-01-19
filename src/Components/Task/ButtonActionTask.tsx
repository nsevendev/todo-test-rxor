import {rxservice} from "rxor";
import {TaskServiceInterface, TaskModuleName} from "../../Modules/Task/TaskType.ts";

export const ButtonActionTask = () => {
    return (
        <div className={"mt-8"}>
            <button
                className={"text-sm bg-red-500 px-4 h-fit ml-auto rounded"}
                type="button"
                onClick={rxservice<TaskServiceInterface>(TaskModuleName.TASK_SERVICE).deleteChecked}
            >
                Supprimer les tâches selectionnées
            </button>
            <button
                className={"text-sm bg-red-500 px-4 h-fit ml-8 rounded"}
                type="button"
                onClick={rxservice<TaskServiceInterface>(TaskModuleName.TASK_SERVICE).deleteAll}
            >
                Supprimer toutes les tâches
            </button>
        </div>
    )
}
