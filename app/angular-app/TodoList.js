import React from "react";

const TodoList = ({ data }) => {
  const todos = data.todos;
  const addTodo = data.addTodo;

  const [newTodo, setNewTodo] = React.useState({ name: "", description: "" });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodo);
    setNewTodo({ name: "", description: "" });
  };

  const handleNameChange = (e) => {
    setNewTodo({ ...newTodo, name: e.target.value });
  };

  const handleDescriptionChange = (e) => {
    setNewTodo({ ...newTodo, description: e.target.value });
  };

  return (
    <div>
      <ol>
        {todos.map((todo, index) => (
          <li key={index}>
            <ul>
              <li>Sujet : {todo.name}</li>
              <li>Description : {todo.description}</li>
            </ul>
          </li>
        ))}
      </ol>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label>Sujet :</label>
          <input type="text" onChange={handleNameChange} value={newTodo.name} />
        </div>
        <div>
          <label>Description :</label>
          <input
            type="text"
            onChange={handleDescriptionChange}
            value={newTodo.description}
          />
        </div>

        <input type="submit" value="Save" />
      </form>
    </div>
  );
};

export default TodoList;
