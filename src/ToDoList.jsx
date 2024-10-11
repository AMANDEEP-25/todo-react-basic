import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function ToDoList() {
  let [todos, setTodos] = useState([{ task: "sample-task", id: uuidv4() }]);
  let [newTodo, setNewTodo] = useState("");
  let addNewTask = () => {
    setTodos([...todos, { task: newTodo, id: uuidv4() }]);
    setNewTodo("");
  };
  let updateTodoValue = (event) => {
    setNewTodo(event.target.value);
  };
  return (
    <div>
      <input
        placeholder="add input task"
        value={newTodo}
        onChange={updateTodoValue}
      ></input>
      <button onClick={addNewTask}>Add task</button>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <h4>Tasks to do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
