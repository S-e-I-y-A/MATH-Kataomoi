// Header.tsx
import "./Header.css";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

type HeaderProps = {
  onSearch: (value: string) => void; // ← これが型！
};

const Header: React.FC<HeaderProps> = ({ onSearch }) => {
  return (
    <header
      style={{
        padding: "1rem",
        background: "#eee",
        justifyContent: "center",

        top: 0,
        left: 0,
        width: "100%",
      }}
    >
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          label="検索"
          variant="filled"
          onChange={(e) => onSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton style={{ cursor: "text" }}>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </header>
  );
};

export default Header;
