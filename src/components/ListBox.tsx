import { useState } from "react";
import { Box,Card, Typography, CardContent, CardHeader, } from '@mui/material';
import Buton from './Buton'

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
        flexBasis:"20%",  
        m: 4,
      }}
    >
      <ul style={{
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
        flex:'wrap',
      }}>
        {tags.map((tag) => (
          <Card sx={{
            m:2,px:4,py:2,width:"40%"
          }}>
          <div style={{
            display:"flex",
          }}>
          <CardHeader title={tag} sx={{p:0}}/>
          <Buton />
          </div> 
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