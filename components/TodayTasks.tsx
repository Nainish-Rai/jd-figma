"use client";
import React from "react";
import { Checkbox } from "./ui/checkbox";

const tasks = [
  { title: "Frontend", done: false },
  { title: "Review the design", done: false },
  { title: "Task 3", done: false },
  { title: "Task 4", done: false },
  { title: "Task 5", done: false },
];

function TodayTasks({}) {
  const [tasksState, setTasksState] = React.useState(tasks);
  return (
    <div className=" w-full h-full bg-[#26252A] p-6 flex flex-col  rounded-xl ">
      <h3 className="text-xl font-semibold">Today&apos;s Task</h3>
      <div className="mt-2">
        <ul>
          {tasksState.map((task) => (
            <li key={task.title} className="flex items-center gap-2 my-2">
              <Checkbox
                onCheckedChange={() => {
                  setTasksState((prevTasks) => {
                    return prevTasks.map((prevTask) => {
                      if (prevTask.title === task.title) {
                        return { ...prevTask, done: !prevTask.done };
                      }
                      return prevTask;
                    });
                  });
                }}
                className={`${
                  task.done ? "border-none" : ""
                } text-black text-sm transition-all  duration-250`}
              />{" "}
              <div
                className={`${
                  task.done ? "line-through text-[#764FFF]" : ""
                } transition-all  duration-250`}
              >
                {task.title}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodayTasks;
