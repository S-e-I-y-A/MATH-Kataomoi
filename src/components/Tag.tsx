import React, { useState, useEffect } from 'react';
import './Tag.css';

const Tag: React.FC = () => {
  const [tags, setTags] = useState<string[]>(() => {
    const saved = localStorage.getItem('tags');
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('tags', JSON.stringify(tags));
  }, [tags]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = input.trim();
    if (trimmed === '') return;
    setTags(prev => [...prev, trimmed]);
    setInput('');
  };

  return (
    <div>
     <h2 style={{ fontSize: '17px', color: 'white' }}>
  追加したいタグを入力してください
</h2>

      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          placeholder="タグを入力"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">追加</button>
      </form>
      <ul>
        {tags.map((tag, index) => (
          <li key={index}>{tag}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tag;