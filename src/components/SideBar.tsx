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
  const [items, setItems] = useState<string[]>([]);

  // 初回マウント時にローカルストレージから配列を取得
  useEffect(() => {
    const saved = localStorage.getItem('tags');
    if (saved) {
      setItems(JSON.parse(saved));
    }
  }, []);

  return (
    <div style={{width:"20%",
      margin:"20px"
    }}>
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
