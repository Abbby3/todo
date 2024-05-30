import "./App.scss";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <div className="todo">
      <h1 className="title">To Do List</h1>
      <TaskForm mode={"edit"} id={"0"}/>
    </div>
  );
}

export default App;
