import { useContext } from "react";
import { TasksContext } from "../../context/TaskContext";
import styles from "./TaskList.module.scss";
import deleteIcon from "../../assets/delete.png";
import { updateTask, deleteTask } from "../../services/task-services";
import { toast } from "react-toastify";
import { TaskType } from "../../types/TaskType";

interface TaskListProps {
  onTaskClick: (taskId: number) => void;
}

const TaskList = ({ onTaskClick }: TaskListProps) => {
  const { tasks, refreshTasks } = useContext(TasksContext);

  const handleDelete = async (id: number, event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    try {
      await deleteTask(id);
      refreshTasks();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unknown Error");
    }
  };

  const handleCheckboxChange = async (task: TaskType) => {
    try {
      await updateTask(task.id, {
        ...task,
        completed: !task.completed,
      });
      refreshTasks();
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unknown Error");
    }
  };

  return (
    <div className={styles.taskList}>
      <ul>
        {tasks.map((task) => (
          <li key={task.id} className={styles.item} onClick={() => onTaskClick(task.id)}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheckboxChange(task)}
              onClick={(e) => e.stopPropagation()}
            />
            <p className={styles.task}>{task.task}</p>
            <button className={styles.deleteBtn} onClick={(e) => handleDelete(task.id, e)}>
              <img className={styles.deleteIcon} src={deleteIcon} alt="delete" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
