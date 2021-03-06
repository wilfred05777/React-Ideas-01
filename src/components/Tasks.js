// import { useState } from "react";

import Task from "./Task";

//// outside of the component state
// const tasks = [
//     {
//       id: 1,
//       text: "Doctors Appointment",
//       day: "Feb 5th at 2:30pm",
//       reminder: true,
//     },
//     {
//       id: 2,
//       text: "Meeting at School",
//       day: "March 5th at 3:30pm",
//       reminder: true,
//     },
//     {
//       id: 3,
//       text: "Food Shopping",
//       day: "April 5th at 1:30pm",
//       reminder: false,
//     },
//   ];

const Tasks = ({ tasks, onDelete, onToggle }) => {
  //// making it part of the component state
  //   const [tasks, setTasks] = useState([
  //     {
  //       id: 1,
  //       text: "Doctors Appointment",
  //       day: "Feb 5th at 2:30pm",
  //       reminder: true,
  //     },
  //     {
  //       id: 2,
  //       text: "Meeting at School",
  //       day: "March 5th at 3:30pm",
  //       reminder: true,
  //     },
  //     {
  //       id: 3,
  //       text: "Food Shopping",
  //       day: "April 5th at 1:30pm",
  //       reminder: false,
  //     },
  //   ]);
  return (
    <>
      {tasks.map((task, index) => (
        // <h3 key={task.id}>{task.text}</h3>
        <Task
          // key={task.id}
          key={index}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </>
  );
};

export default Tasks;
