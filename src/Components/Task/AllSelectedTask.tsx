import {rxservice, useRxCompute} from "rxor";
import {TaskServiceInterface, TaskModuleName} from "../../Modules/Task/TaskType.ts";

export const AllSelectedTask = () => {
    const isAllChecked = useRxCompute<TaskServiceInterface, boolean>(
        TaskModuleName.TASK_SERVICE,
        (service) => service.isAllChecked()
    )
    return (
        <div className={"mt-8"}>
            <input
                type="checkbox"
                id={"selectAll"}
                checked={isAllChecked ?? false}
                onChange={(e) =>
                    rxservice<TaskServiceInterface>(
                        "taskService"
                    ).toggleCheckAll(e.currentTarget.checked)
                }
                className="cursor-pointer mr-4"
            />
            <label htmlFor={"selectAll"} className={"text-xl mr-8 cursor-pointer"}>Selectionner toutes les tâches</label>
        </div>
    )
}
