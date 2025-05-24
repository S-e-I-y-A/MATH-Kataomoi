import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import ListBox from "./components/ListBox";
import Footer from "./Footer";
import Tag from "./components/Tag";


function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (value: string) => {
    setSearchTerm(value);
  };

  return (
    <>
      <Header onSearch={handleSearch} />
      <Tag />
      <ListBox />
      <Footer />
    </>
  );
}

export default App;
