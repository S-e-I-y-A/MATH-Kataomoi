import React, { useState, useEffect } from 'react';
import './Tag.css';
import { Paper,Tooltip,IconButton } from '@mui/material';
import {Add,Delete} from '@mui/icons-material'

const Tag: React.FC = () => {
  const [tags, setTags] = useState<string[]>(() => {
    const saved = localStorage.getItem('tags');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tags));
    console.log("test");
  }, [tags]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed === '') return;
    setTags(prev => [...prev, trimmed]);
    setInput('');
    window.location.reload();
  };

  return (
    <Paper sx={{
      width:"20%",
      margin:0,
      left: "50%",
      top: "50%",
      }}>
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Todoを入力"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Tooltip title="Add">
                <IconButton type="submit">
                    <Add />
                </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
                <IconButton>
                    <Delete />
                </IconButton>
            </Tooltip>
      </form>
    </Paper>
  );
};

export default Tag;