// Header.tsx
import "./Header.css";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import Add from "./Add";
import type { Todo } from '../App';

interface HeaderProps {
  onSearch: (value: string) => void;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Header: React.FC<HeaderProps> = ({ onSearch, todos, setTodos }) => {
  return (
    <header
      style={{
        padding: "15px 0px",
        background: "#eee",
        justifyContent: "center",
        position: "sticky",
        top: 0,
        margin: 0,
        left: 0,
        width: "100%",
        zIndex: 100,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 24, justifyContent: 'center', width: '100%' }}>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            mx: 5,
            display: "flex",
            alignItems: "center",
            width: 300,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <Add todos={todos} setTodos={setTodos} />
      </div>
    </header>
  );
};

export default Header;
