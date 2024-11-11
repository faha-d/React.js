import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { AiOutlineDelete } from "react-icons/ai";
import "./TodoList.css";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (taskInput.trim() === "") return;

    const newTask = { id: uuidv4(), text: taskInput };
    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const handleRemoveTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
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
              onChange={(e) => setTaskInput(e.target.value)}
            />
          </div>

          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
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
