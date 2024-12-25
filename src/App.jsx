import { useState } from "react";
import "./App.css";
import AddTask from "./components/AddTask";
import TasksList from "./components/TasksList";

function App() {
  return (
    <div className="App">
      <h1>Module 17. Effector</h1>
      <h2>Список задач</h2>
      <AddTask />
      <TasksList />
    </div>
  );
}

export default App;
