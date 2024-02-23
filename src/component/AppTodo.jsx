/*
function AppTodo() {
  return (
    <div className="Todo-container">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AppTodo;*/

import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

  function AddTodo() {
    const {addNewItem} = useContext(TodoItemsContext);
    const [todoName , setTodoName] = useState("");
    const [dueDate , setDueDate] = useState("");
const handleNameChange = (event)=>{
  setTodoName(event.target.value);
}
const handleDateChange = (event)=>{
  setDueDate(event.target.value);
}
const handleAddButtonClicked = ()=>{
  addNewItem(todoName , dueDate);
  setDueDate("");
  setTodoName("");

}

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" value={todoName} placeholder="Enter Todo Here" onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button"
          onClick={handleAddButtonClicked}
          >
            <IoIosAddCircleOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
 
