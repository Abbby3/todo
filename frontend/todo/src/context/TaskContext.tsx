import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { getAllTasks } from "../services/TaskService";

export const TaskContext = createContext([]);

// eslint-disable-next-line react-refresh/only-export-components
export const useTaskContext = () => useContext(TaskContext);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    getAllTasks().then((data) => setTasks(data));
  }, []);

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
};
