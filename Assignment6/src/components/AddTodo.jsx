import { useState } from "react";

function Add_Todo({ onNewItem }) {
  const [TodoName, setTodoName] = useState([]);
  const [dueDate, setdueDate] = useState([]);

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setdueDate(event.target.value);
  };

  const handleAdd = () => {
    onNewItem(TodoName, dueDate);
    setTodoName("");
    setdueDate("");
    console.log(TodoName);
  };

  return (
    <>
      <div className="row items">
        <div className="col-6">
          <input
            type="text"
            placeholder="Enter your task"
            className="input-container"
            value={TodoName}
            onChange={handleNameChange}
          ></input>
        </div>
        <div className="col-4">
          <input
            type="date"
            className="input-date"
            onChange={handleDateChange}
            value={dueDate}
          ></input>
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success my-button"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </>
  );
}
export default Add_Todo;
