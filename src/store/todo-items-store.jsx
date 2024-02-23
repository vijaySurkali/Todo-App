import { createContext } from "react";
import { useReducer } from "react";

export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => {},
  deleteItem: () => {},
});
const todoItemReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.itemName, dueDate: action.payload.dueDate },
    ];
  } else if (action.type === "DELETE_ITEMS") {
    newTodoItems = currTodoItems.filter(
      (item) => item.name != action.payload.itemName
    );
  }

  return newTodoItems;
};
const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, dueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        itemName: itemName,
        dueDate: dueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (todoItemName) => {
    const delelteTodoItemAction = {
      type: "DELETE_ITEMS",
      payload: {
        itemName: todoItemName,
      },
    };
    dispatchTodoItems(delelteTodoItemAction);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};
export default TodoItemContextProvider;
