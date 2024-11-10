import { useState } from "react";

const TodoList = () => {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === "") return;
    setTodo([...todo, newTodo]);
    setNewTodo("");
  };
  return (
    <>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter New Task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add New Task</button>
      </form>

      <ul>
        {todo.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
