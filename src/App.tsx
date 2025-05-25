import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListBox from "./components/ListBox";
import Footer from "./Footer";
import Add from "./components/Add";
import SideBar from "./components/SideBar";

export type Todo = { Title: string; Detail: string; Tag: string };

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem('todos');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="main">
        <SideBar todos={todos} />
        <div className="box">
          <Add todos={todos} setTodos={setTodos} />
          <ListBox todos={todos} setTodos={setTodos} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
