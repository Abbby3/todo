import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { createTask, getTaskById, updateTask } from "../../services/task-services";
import styles from "./TaskForm.module.scss";
import { TaskType } from "../../types/TaskType";
import { schema } from "./schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { TasksContext } from "../../context/TaskContext";

interface TaskFormProps {
  id: number | null;
  onClose: () => void;
}

const TaskForm = ({ id, onClose }: TaskFormProps) => {
  const { refreshTasks } = useContext(TasksContext);

  const defaultTask: TaskType = {
    id: 0,
    task: "",
    completed: false,
    importance: "low",
    created: null,
    edited: null,
  };
  const { handleSubmit, register, setValue } = useForm<TaskType>({
    resolver: zodResolver(schema),
    defaultValues: defaultTask,
  });

  const [task, setTask] = useState<TaskType>(defaultTask);

  useEffect(() => {
    const fetchTask = async () => {
      if (id !== null) {
        try {
          const fetchedTask = await getTaskById(id);
          setTask(fetchedTask);
          Object.keys(fetchedTask).forEach((key) => {
            setValue(key as keyof TaskType, fetchedTask[key as keyof TaskType]);
          });
        } catch (error) {
          toast.error(error instanceof Error ? error.message : "Unknown Error");
        }
      }
    };

    fetchTask();
  }, [id, setValue]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      if (id !== null) {
        await updateTask(id, data);
      } else {
        const response = await createTask(data);
        setTask(response);
      }
      refreshTasks();
      onClose();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unknown Error");
    }
  });

  return (
    <form onSubmit={onSubmit} className={styles.taskForm}>
      <div className={styles.content}>
        <label>
          Task: <input type="text" {...register("task")} />
        </label>

        <label>
          Importance:{" "}
          <select {...register("importance")}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>

        <label>
          Completed: <input type="checkbox" {...register("completed")} />
        </label>

        <p>Created: {task.created ? new Date(task.created).toLocaleString() : "N/A"}</p>
        <p>Edited: {task.edited ? new Date(task.edited).toLocaleString() : "N/A"}</p>
      </div>

      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
