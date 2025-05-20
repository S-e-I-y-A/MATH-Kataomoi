import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      {/* 他のコンテンツ */}
    </>
  );
}

export default App;
