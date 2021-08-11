import { useEffect, useState } from "react";
import FormCreate from "./component/FormTask";
import TodoList from "./component/TodoList";
import { compareTask } from "./ult/common";
import firebase from "firebase/app";
import "./App.css";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyD2yvoTIySraWdSbxmwsJLfgQ_XPj-JdH8",
//   authDomain: "atastay.firebaseapp.com",
//   databaseURL: "https://atastay.firebaseio.com",
//   projectId: "atastay",
//   storageBucket: "atastay.appspot.com",
//   messagingSenderId: "943426852786",
//   appId: "1:943426852786:web:e224c128d2bfb3121eb6ab",
//   measurementId: "G-B1GGTF443Z",
// };
// // Initialize Firebase
// try {
//   firebase.initializeApp(firebaseConfig);
// } catch (error) {}

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

  const login = (type) => () => {
    // let provider;
    // switch (type) {
    //   case "f":
    //     provider = new firebase.auth.FacebookAuthProvider();
    //     break;
    //   case "g":
    //     provider = new firebase.auth.GoogleAuthProvider();
    //     break;

    //   default:
    //     break;
    // }

    // firebase.auth().signInWithRedirect(provider);
  };

  useEffect(() => {
    // firebase
    //   .auth()
    //   .getRedirectResult()
    //   .then((result) => {
    //     console.log("😡coh / file: App.js / line 87 / result", result);
    //     if (result.credential) {
    //       console.log(`1`, 1);
    //       alert(JSON.stringify(result))
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("😡coh / file: App.js / line 94 / error", error);
    //     alert(JSON.stringify(error))
    //   });
  }, []);

  return (
    <div className="container">
      <div className="left-content">
        <div className="p-50">
          <p className="text-header text-center">New Task</p>
          <FormCreate value={{}} onChange={onCreate} />
          <br />
          <div className="flex gap-20">
            <button
              onClick={login("f")}
              className="btn bg-blue w-full text-white"
            >
              loginFb
            </button>
            <button
              onClick={login("g")}
              className="btn bg-red w-full text-white"
            >
              loginGG
            </button>
          </div>
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
