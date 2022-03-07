import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };

    getTasks();
  }, []);

  //// FETCH TASKS
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    // console.log(data);

    return data;
  };
  // fetchTasks();

  // const [tasks, setTasks] = useState([
  //   {
  //     id: 1,
  //     text: "Doctors Appointment",
  //     day: "Feb 5th at 2:30pm",
  //     reminder: true,
  //   },
  //   {
  //     id: 2,
  //     text: "Meeting at School",
  //     day: "March 5th at 3:30pm",
  //     reminder: true,
  //   },
  //   {
  //     id: 3,
  //     text: "Food Shopping",
  //     day: "April 5th at 1:30pm",
  //     reminder: false,
  //   },
  // ]);

  //// DELETE TASK
  const deleteTask = async (id) => {
    // console.log("delete", id);

    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "DELETE",
    });

    setTasks(tasks.filter((task) => task.id !== id));
  };

  // // Toggle Reminder
  const toggleReminder = (id) => {
    // console.log(id);
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //// ADD TASK
  const addTask = (task) => {
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;
    // console.log(id);

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      {/* <h1> Task Tracer App</h1> */}
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />

      {showAddTask && <AddTask onAdd={addTask} />}

      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks to Show"
      )}
    </div>
  );
};

export default App;
