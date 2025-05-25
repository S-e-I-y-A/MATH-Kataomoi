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
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('todos');
    if (saved) {
      const todos = JSON.parse(saved) as { Title: string; Detail: string; Tag: string }[];
      // Tagの重複を除いて一覧化
      const uniqueTags = Array.from(new Set(todos.map(todo => todo.Tag)));
      setTags(uniqueTags);
    }
  }, []);

  return (
    <div style={{width:"20%", margin:"20px"}}>
      {/* タグの横並び表示 */}
      <Stack direction="row" spacing={2} flexWrap="wrap">
        {tags.map((tag, idx) => (
          <Item key={idx}>{tag}</Item>
        ))}
      </Stack>
    </div>
  );
};

export default SideBar;
