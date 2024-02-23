/*
import AppName from "./component/AppName";
import AppTodo from "./component/AppTodo";

import TodoItems from "./component/TodoItems";
import "./App.css";

function App() {
  
  const todoItems = [{
    
    name: 'buy milk',
    dueDate: '04/08/2023'
  },
{
  
  name: 'go to collage',
  dueDate: '04/08/2023'
}];
  return (
    <center className="todo-container">
      <AppName/>
      <AppTodo/>
      <TodoItems TodoItems={todoItems}/>
     
    </center>
  );
}

export default App;*/

import AppName from "./component/AppName";
import AddTodo from "./component/AppTodo";
import TodoItems from "./component/TodoItems";
import "./App.css";

import WelcomeMessage from "./component/WelcomeMessage";
import TodoItemContextProvider from "./store/todo-items-store";

function App() {
  return (
    <TodoItemContextProvider>
      <center className="todo-container">
        <AppName />

        <AddTodo />
        {<WelcomeMessage></WelcomeMessage>}
        <TodoItems></TodoItems>
      </center>
    </TodoItemContextProvider>
  );
}
export default App;
