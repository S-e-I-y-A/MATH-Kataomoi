import { useState } from "react";
import { Box,Card, Typography, CardContent, CardHeader, } from '@mui/material';

// Removed unused and incomplete ListsBox function


const ListBox: React.FC = () => {
  const [tags] = useState<string[]>(() => {
    const saved = localStorage.getItem('tags');
    return saved ? JSON.parse(saved) : [];
  });


  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        m: 4,
      }}
    >
      <ul>
        {tags.map((tag) => (
          <Card sx={{
            m:2,px:4,py:2
          }}>
          <CardHeader title={tag} sx={{p:0}}/> 
          <CardContent sx={{p:0}}>
          <Typography variant="body2" sx={{
            color: 'text.secondary',
            fontSize: 15,
          }}>
          詳細
          </Typography>
          </CardContent>
          </Card>
        ))}
      </ul>
    </Box>  
  );
};

export default ListBox;