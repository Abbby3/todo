import React, { useState, useEffect, ChangeEvent } from "react";
import { getTaskById } from "../services/TaskService"; // Assuming you have a TaskService for fetching task details

interface Task {
  id: string;
  taskName: string;
  importance: string;
  created: string;
  edited: string;
  calendar: string;
  repeats: string;
}

interface Props {
  mode: string;
  id?: string;
}

const TaskForm: React.FC<Props> = ({ mode, id }) => {
  const [task, setTask] = useState<Task>({
    id: "",
    taskName: "",
    importance: "",
    created: "",
    edited: "",
    calendar: "",
    repeats: "",
  });

  useEffect(() => {
    if (mode !== "new" && id) {
      getTaskDetails(id); // Fetch task details if mode is not new and id is provided
    }
  }, [mode, id]);

  const getTaskDetails = async (taskId: string) => {
    try {
      const taskData: Task = await getTaskById(taskId);
      setTask(taskData);
    } catch (error) {
      console.error("Error fetching task details:", error);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };

  return (
    <div>
      <label>Task Title:</label>
      {mode === "info" ? (
        <div>{task.taskName}</div>
      ) : (
        <input type="text" name="taskName" value={task.taskName} onChange={handleChange} />
      )}

      <label>ID:</label>
      <div>{task.id}</div>

      <label>Importance:</label>
      {mode === "info" ? (
        <div>{task.importance}</div>
      ) : (
        <input type="text" name="importance" value={task.importance} onChange={handleChange} />
      )}

      <label>Created:</label>
      <div>{task.created}</div>

      <label>Edited:</label>
      <div>{task.edited}</div>

      <label>Calendar:</label>
      {mode === "info" ? (
        <div>{task.calendar}</div>
      ) : (
        <input type="text" name="calendar" value={task.calendar} onChange={handleChange} />
      )}

      <label>Repeats:</label>
      {mode === "info" ? (
        <div>{task.repeats}</div>
      ) : (
        <input type="text" name="repeats" value={task.repeats} onChange={handleChange} />
      )}
    </div>
  );
};

export default TaskForm;
