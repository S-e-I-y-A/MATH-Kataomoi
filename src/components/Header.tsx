// Header.tsx
import "./Header.css";
import * as React from "react";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";

type HeaderProps = {
  onSearch: (value: string) => void; // ← これが型！
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
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
      }}
    >
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
    </header>
  );
};

export default Header;
