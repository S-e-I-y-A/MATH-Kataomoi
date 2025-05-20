import "./App.css";
import React, { useState } from "react";

import Header from "./components/Header";
import ListBox from "./components/ListBox";
import Footer from "./Footer";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <ListBox />
      <Footer />
    </>
  );
}

export default App;
