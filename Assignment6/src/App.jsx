import AppName from "./components/AppName.jsx";
import Add_Todo from "./components/AddTodo.jsx";
import Items from "./components/Items.jsx";
import Welcome from "./components/Welcome.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function App() {
  const initialItems = [
    // {
    //   Name: "Buy milk",
    //   dueDate: "2-3-23",
    // },
    // {
    //   Name: "Buy book",
    //   dueDate: "2-3-23",
    // },
    // {
    //   Name: "Buy coffee",
    //   dueDate: "2-3-23",
    // },
  ];

  const [todoItems, settodoItems] = useState(initialItems);

  const newItem = (itemName, itemdueDate) => {
    const newTodoItems = [
      ...todoItems,
      {
        Name: itemName,
        dueDate: itemdueDate,
      },
    ];

    settodoItems(newTodoItems);
    
  };

  const handleDeleteClick = (todoItemName) => {
    const newTodoItems = todoItems.filter((item) => item.Name !== todoItemName);
    settodoItems(newTodoItems);
  };

  return (
    <center className="todo-container">
      <AppName />
      <Add_Todo onNewItem={newItem} />
      {todoItems.length === 0 && <Welcome />}
     <Items
  todoItems={[...todoItems].sort(
    (a, b) => new Date(a.dueDate) - new Date(b.dueDate)
  )}
  onDelete={handleDeleteClick}
/>

    </center>
  );
}

export default App;
