/*import TodoItem from "./TodoItem";
const TodoItems = ({ todoItems }) => {
  return (
    
      <div className="items-container">
       {todoItems.map((item)=>(<TodoItem todoDate={item.todoDate}  todoName={item.todoName }></TodoItem>))}
        
       
      </div>
    
  );
};
export default TodoItems;*/

  import TodoItem from "./TodoItem";
  import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


const TodoItems = () => {
  const {todoItems }  = useContext(TodoItemsContext);
  
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem key={item.name} todoDate={item.dueDate}
         todoName={item.name}
          ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
 
