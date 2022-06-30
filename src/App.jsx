import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import "./App.css";
import AddTask from "./components/AddTask";
import "./components/Tasks";
import Tasks from "./components/Tasks";

const App = () => {

  // const message = 'Hello word';
  const [tasks, setTasks] = useState([

    {
      id: "1",
      title: "Estudar Programação",
      completed: false,
    },

    {
      id: "2",
      title: "Ler Livros",
      completed: true,
    },

    {
      id: "3",
      title: "Tomar água",
      completed: true,
    },


  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if(task.id === taskId) return {...task, completed: !task.completed};
          return task;
      })
      setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completead: false,
      },
    ];
    setTasks(newTasks);
  };

  return ( 
  <>
  <div className="container">
    <AddTask handleTaskAddition={handleTaskAddition} />
    <Tasks tasks={tasks} handleTaskClick={handleTaskClick}/>
  </div>
   
  
  </>
  
  );
  
}

export default App;