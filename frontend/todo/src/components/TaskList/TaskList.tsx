import { useTaskContext } from "../../context/TaskContext";
import styles from "./TaskList.module.scss";

const TaskList = () => {
  const tasks = useTaskContext();

  return (
    <div className={styles.taskList}>
      <ul>
        {tasks.map((task, index) => (
          <div key={index}>
            <p>{task.task}</p>
            <input type="checkbox" checked={task.completed}></input>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
