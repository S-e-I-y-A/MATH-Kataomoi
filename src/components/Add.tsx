import React, { useState, useEffect } from 'react';
import { Paper,Tooltip,IconButton } from '@mui/material';
import {Add,Delete} from '@mui/icons-material'

const Tag: React.FC = () => {
  const [Title, setTitle] = useState<string[]>(() => {
    const saved = localStorage.getItem('Title');
    return saved ? JSON.parse(saved) : [];
  });
  const [Detail,setDetail] = useState<string[]>(() => {
    const saved = localStorage.getItem('Detail');
    return saved ? JSON.parse(saved) : [];
  });
  const [tags, setTags] = useState<string[]>(() => {
    const saved = localStorage.getItem('tags');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState<string>('');
  const [input2, setInput2] = useState<string>('');
  const [input3, setInput3] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('Title', JSON.stringify(Title));
    localStorage.setItem('Detail', JSON.stringify(Detail));
    localStorage.setItem('tags', JSON.stringify(tags));
    console.log("test");
  }, [Title, Detail, tags]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedTitle = input.trim();
    const trimmedDetail = input2.trim();
    const trimmedTag = input3.trim();

    if (trimmedTitle === '' || trimmedDetail === '' || trimmedTag === '') return;

    setTitle(prev => [...prev, trimmedTitle]);
    setDetail(prev => [...prev, trimmedDetail]);
    setTags(prev => [...prev, trimmedTag]);

    setInput('');
    setInput2('');
    setInput3('');
  };
  return (
    <Paper sx={{
      width:"30%",
      my:4,
      }}>
      <form onSubmit={handleSubmit} style={{display:"flex"}}>
        <input
          className="input"
          type="text"
          placeholder="Todoを入力"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="詳細を入力"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="タグを入力"
          value={input3}
          onChange={(e) => setInput3(e.target.value)}
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