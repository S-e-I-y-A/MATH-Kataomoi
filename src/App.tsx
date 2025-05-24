import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import ListBox from "./components/ListBox";
import Footer from "./Footer";
import Add from "./components/Add";
import SideBar from "./components/SideBar";



function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <div className="main">
      <SideBar />
      <div className="box">
        <Add />
        <ListBox />
      </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
