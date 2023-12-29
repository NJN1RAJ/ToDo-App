import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import CreatePost from "./components/createPost";
import Post from "./components/Post";

function App() {
  const [todoItem, setTodoItem] = useState([]);

  const addNewItem = (task, date) => {
    setTodoItem([{ date, task }, ...todoItem]);
    console.log(todoItem);
  };

  const handleDelete = (task) => {
    let newList = todoItem.filter((item) => item.task != task);
    setTodoItem(newList);
  };

  return (
    <>
      <Header />
      <CreatePost addNewItem={addNewItem} />
      <Post todoItem={todoItem} handleDelete={handleDelete} />
    </>
  );
}

export default App;
