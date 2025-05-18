// Header.tsx
import "./Header.css";
import React from "react";

type HeaderProps = {
  onSearch: (value: string) => void; // ← これが型！
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header style={{ padding: "1rem", background: "#eee" }}>
      <input
        type="text"
        placeholder="検索..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </header>
  );
};

export default Header;
