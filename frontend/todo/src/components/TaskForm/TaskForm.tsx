import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { createTask, getTaskById, updateTask } from "../../services/TaskService";
import styles from "./TaskForm.module.scss";

const TaskForm = ({ id }: { id: string | null }) => {
  const [task, setTask] = useState({
    task: "",
    completed: false,
    importance: "medium",
    calendar: "",
    repeats: "",
    created: null,
    edited: null,
  });

  useEffect(() => {
    if (id != null) {
      getTaskById(id)
        .then((res) => setTask(res))
        .catch((e) => console.error(e));
    }
  }, [id]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (id != null) {
      updateTask(id, task);
    } else {
      createTask(task);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.taskForm}>
      <label>
        Task:
        <input
          type="text"
          name="task"
          value={task.task}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTask((prevState) => ({
              ...prevState,
              task: e.target.value,
            }));
          }}
          required
        />
      </label>

      <label>
        Importance:
        <select
          name="importance"
          value={task.importance}
          onChange={(e: ChangeEvent<HTMLSelectElement>) => {
            setTask((prevState) => ({
              ...prevState,
              importance: e.target.value,
            }));
          }}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </label>

      <label>
        Completed:
        <input
          type="checkbox"
          name="completed"
          checked={task.completed}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setTask((prevState) => ({
              ...prevState,
              completed: e.target.checked,
            }));
          }}
        />
      </label>

      <p>Created: {task.created || "N/A"}</p>
      <p>Edited: {task.edited || "N/A"}</p>
      <button type="submit">Save</button>
    </form>
  );
};

export default TaskForm;
