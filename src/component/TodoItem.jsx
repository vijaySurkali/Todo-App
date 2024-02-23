/**
function TodoItem({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;*/
import { useContext } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-items-store";
 function TodoItem({ todoName, todoDate  }) {
  const {deleteItem} = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button" 
          onClick={()=> deleteItem(todoName)}>
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
 
