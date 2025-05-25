import React, { useState } from 'react';
import { Paper, Tooltip, IconButton } from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import type { Todo } from '../App';

interface AddProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Add: React.FC<AddProps> = ({ todos, setTodos }) => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [tag, setTag] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title.trim() || !detail.trim() || !tag.trim()) return;
    setTodos([...todos, { Title: title.trim(), Detail: detail.trim(), Tag: tag.trim() }]);
    setTitle('');
    setDetail('');
    setTag('');
  };

  return (
    <Paper sx={{ width: '30%', my: 4 }}>
      <form onSubmit={handleSubmit} style={{ display: 'flex' }}>
        <input
          className="input"
          type="text"
          placeholder="タイトルを入力"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="詳細を入力"
          value={detail}
          onChange={e => setDetail(e.target.value)}
        />
        <input
          className="input"
          type="text"
          placeholder="タグを入力"
          value={tag}
          onChange={e => setTag(e.target.value)}
        />
        <Tooltip title="Add">
          <IconButton type="submit">
            <AddIcon />
          </IconButton>
        </Tooltip>
      </form>
    </Paper>
  );
};

export default Add;