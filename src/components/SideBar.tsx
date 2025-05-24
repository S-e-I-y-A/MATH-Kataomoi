import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

const SideBar: React.FC = () => {
  const [input, setInput] = useState('');
  const [items, setItems] = useState<string[]>([]);

  // 初回マウント時にローカルストレージから配列を取得
  useEffect(() => {
    const saved = localStorage.getItem('SideBar');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  // 追加ボタン押した時の処理
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return; // 空欄スキップ
    const newItems = [...items, input];
    setItems(newItems);
    localStorage.setItem('SideBar', JSON.stringify(newItems));
    setInput('');
  };

  return (
    <div>
      {/* === ここがINPUTタブ部分！ === */}
      <form onSubmit={handleAdd} style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="追加するタグを入力"
          style={{ padding: 8, fontSize: 16, marginRight: 8 }}
        />
        <button type="submit">追加</button>
      </form>
      {/* =========================== */}

      {/* タグの横並び表示 */}
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {items.map((tag, idx) => (
          <Item key={idx}>{tag}</Item>
        ))}
      </Stack>
    </div>
  );
};

export default SideBar;
