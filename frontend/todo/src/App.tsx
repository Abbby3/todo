import { useState } from "react";
import "./App.scss";
import TaskList from "./components/TaskList/TaskList";
import TaskProvider from "./context/TaskContext";
import TaskForm from "./components/TaskForm/TaskForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [renderForm, setRenderForm] = useState(false);
  const [taskId, setTaskId] = useState<number | null>(null);

  const openForm = (taskId?: number) => {
    setTaskId(taskId ?? null);
    setRenderForm(true);
  };

  const closeForm = () => {
    setRenderForm(false);
  };

  return (
    <TaskProvider>
      <div className="todo">
        <div className="app">
          <h1 className="title">TO DO LIST</h1>
          <div className="content">
            <div className="list">
              <h2 className="tasktitle">Tasks</h2>
              <TaskList onTaskClick={openForm} />
            </div>
            <div className="form">
              <div className="fixed">
                {renderForm && <TaskForm id={taskId} onClose={closeForm} />}
                <button
                  onClick={() => {
                    renderForm ? closeForm() : openForm();
                  }}
                >
                  {renderForm ? "Cancel" : "New Task"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer autoClose={5000} hideProgressBar theme="colored" />
      </div>
    </TaskProvider>
  );
}

export default App;
