import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import ListBox from "./components/ListBox";
import Footer from "./Footer";
import Add from "./components/Add"
import Navi from "./components/Navi"


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Add />
      <div className="box">
        <ListBox />
      </div>
      <Footer />
    </>
  );
}

export default App;
