import { useState } from "react";
import "./App.scss";
import TaskList from "./components/TaskList/TaskList";
import { TaskProvider } from "./context/TaskContext";
import TaskForm from "./components/TaskForm/TaskForm";

function App() {
  const [newMode, setNewMode] = useState(false);
  const handleClick = () => {
    setNewMode(!newMode);
  };

  return (
    <TaskProvider>
      <div className="todo">
        <h1 className="title">To Do List</h1>
        <TaskList />
        <button onClick={handleClick}>New</button>
        {newMode && <TaskForm id={null} />}
      </div>
    </TaskProvider>
  );
}

export default App;
