import { useState } from "react";
import "./TodoList.css"
const TodoList = () => {
  return (
    <section className="todo-container">

      <header>
        <h1>Todo List</h1>
        <p>Write and Manage your tasks efficiently and smartly</p>
      </header>

      <section className="form-container">
        <form>
          <div>
            <input
              type="text"
              className="todo-input"
              placeholder="Write your task..."
            />
          </div>

          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
    </section>
  );
};

export default TodoList;
