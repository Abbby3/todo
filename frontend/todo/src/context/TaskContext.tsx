import { createContext, useEffect, useState } from "react";
import { TaskType } from "../types/TaskType";
import { getAllTasks } from "../services/task-services";

interface TasksContextProps {
  tasks: TaskType[];
  refreshTasks: () => void;
}

const defaults: TasksContextProps = {
  tasks: [],
  refreshTasks: () => console.log("Refreshing tasks"),
};

export const TasksContext = createContext<TasksContextProps>(defaults);

interface TasksContextProviderProps {
  children: React.ReactNode;
}

const TasksContextProvider = ({ children }: TasksContextProviderProps) => {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const refreshTasks = (): void => {
    getAllTasks()
      .then((data) => setTasks(data))
      .catch((error) => console.error("Error fetching tasks:", error));
  };

  useEffect(() => {
    refreshTasks();
  }, []);

  return <TasksContext.Provider value={{ tasks, refreshTasks }}>{children}</TasksContext.Provider>;
};

export default TasksContextProvider;
