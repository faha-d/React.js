import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (taskInput.trim() === "") {
      let errorMsg = document.querySelector(".empty-inp");
      errorMsg.classList.add("active");
      return;
    }

    const newTask = { id: uuidv4(), text: taskInput };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
    let errorMsg = document.querySelector(".empty-inp");
    if (e.target.value.trim() !== "") {
      errorMsg.classList.remove("active");
    }
  };

  const handleRemoveAll = () => {
    console.log("hello");
    setTasks([]);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <p>Write and Manage your tasks efficiently and smartly</p>
      </header>

      <section className="form-container">
        <form onSubmit={handleAddTask}>
          <div>
            <input
              type="text"
              className="todo-input"
              placeholder="Write your task..."
              value={taskInput}
              onChange={handleInputChange}
            />
            <p className="empty-inp">Please Enter Text!</p>
          </div>

          <div className="func-btns">
            <button type="submit" className="todo-btn">
              Add Task
            </button>

            {tasks.length > 0 && (
              <button className="todo-btn red" onClick={handleRemoveAll}>
                Remove All
              </button>
            )}
          </div>
        </form>
      </section>

      <section className="list-container">
        <ul>
          {tasks.map(({ id, text }) => (
            <li key={id}>
              <p>{text}</p>
              <button onClick={() => handleRemoveTask(id)}>
                Remove Task
                <AiOutlineDelete style={{ marginRight: "5px" }} />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default TodoList;
