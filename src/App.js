import { useEffect, useState } from "react";
import FormCreate from "./component/FormTask";
import TodoList from "./component/TodoList";
import { compareTask } from "./ult/common";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const onCreate = (newTask) => {
    const dataProcess = [...tasks, newTask].sort(compareTask);
    setTasks(dataProcess);
  };

  const onUpdate = (index, task) => {
    let dataProcess = [...tasks];
    dataProcess[index] = task;
    dataProcess = dataProcess.sort(compareTask);
    setTasks(dataProcess);
  };

  const onDelete = (index) => {
    const dataProcess = [...tasks];
    dataProcess.splice(index, 1);
    setTasks(dataProcess);
  };

  const onDeleteMultiple = (indexes) => {
    const dataProcess = tasks.filter((task, index) => indexes.includes(index));
    setTasks(dataProcess);
  };

  useEffect(() => {
    try {
      const dataRaw = localStorage.getItem("tasks");
      if (dataRaw) {
        const data = JSON.parse(dataRaw);
        if (Array.isArray(data)) setTasks(data);
      }
    } catch (error) {}
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <div className="left-content">
        <div className="p-50">
          <p className="text-header text-center">New Task</p>
          <FormCreate value={{}} onChange={onCreate} />
        </div>
      </div>

      <div className="right-content">
        <TodoList
          tasks={tasks}
          onUpdate={onUpdate}
          onDelete={onDelete}
          onDeleteMultiple={onDeleteMultiple}
        />
      </div>
    </div>
  );
}

export default App;
