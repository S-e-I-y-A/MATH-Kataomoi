import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import ListBox from "./components/ListBox";
import Footer from "./Footer";
import SideBar from "./components/SideBar";
import Add from "./components/Add";

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
      <Header onSearch={handleSearch} todos={todos} setTodos={setTodos} />
      <div className="main">
        <SideBar todos={todos} />
        <div className="box">
          <ListBox todos={todos} setTodos={setTodos} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
