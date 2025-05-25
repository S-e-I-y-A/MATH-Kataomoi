import { Box, Card, Typography, CardContent, CardHeader, IconButton } from '@mui/material';
import { Delete } from '@mui/icons-material';
import type { Todo } from '../App';

interface ListBoxProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ListBox: React.FC<ListBoxProps> = ({ todos, setTodos }) => {
  const handleDelete = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", m: 4 }}>
      <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', flexWrap: 'wrap' }}>
        {todos.map((todo, idx) => (
          <Card key={idx} sx={{ m:2, px:4, py:2, width: "40%", display: 'flex', alignItems: 'center' }}>
            <div style={{ display: "flex" }}>
              <CardHeader title={todo.Title} sx={{p:0}}/>
              <IconButton onClick={() => handleDelete(idx)} aria-label="delete">
                <Delete />
              </IconButton>
            </div>
            <CardContent sx={{p:0}}>
              <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: 15 }}>
                {todo.Detail}<br/>
                タグ: {todo.Tag}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </ul>
    </Box>
  );
};

export default ListBox;