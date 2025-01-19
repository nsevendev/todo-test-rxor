import {Input} from "../Input.tsx";
import {rxservice} from "rxor";
import {TaskServiceInterface} from "../../Modules/Task/TaskType.ts";
import {useState} from "react";

export const FormAddTask = () => {
    const [value, setValue] = useState("");
    
    return (
        <form className={"flex items-center"}>
            <Input
                id={"1"}
                value={value}
                onChange={(e) => setValue(e.currentTarget.value)}
            />
            <button
                className={"ml-4 px-4 py-1 bg-blue-500 rounded-md text-sm h-fit"}
                type="button"
                onClick={() => {
                    rxservice<TaskServiceInterface>("taskService").add(
                        rxservice<TaskServiceInterface>("taskService").createObject(value)
                    )
                    setValue("")
                }
                }
            >
                Ajouter
            </button>
        </form>
    )
}
