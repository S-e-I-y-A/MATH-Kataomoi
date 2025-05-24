import { useState } from "react";
import { Box,Card, Typography, CardContent, CardHeader, } from '@mui/material';
import Buton from './Buton'

// Removed unused and incomplete ListsBox function


const ListBox: React.FC = () => {
  const [Title] = useState<string[]>(() => {
    const saved = localStorage.getItem('Title');
    return saved ? JSON.parse(saved) : [];
  });

  const [Detail] = useState<string[]>(() => {
    const saved = localStorage.getItem('Detail');
    return saved ? JSON.parse(saved) : [];
  });

  const [tags] = useState<string[]>(() => {
    const saved = localStorage.getItem('tags');
    return saved ? JSON.parse(saved) : [];
  });

  const listing = [Title,Detail,tags];


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
        {Title.map((title, idx) => (
          <Card key={idx} sx={{
            m:2,px:4,py:2,width:"40%"
          }}>
            <div style={{
              display:"flex",
            }}>
              <CardHeader title={title} sx={{p:0}}/>
              <Buton />
            </div> 
            <CardContent sx={{p:0}}>
              <Typography variant="body2" sx={{
                color: 'text.secondary',
                fontSize: 15,
              }}>
                {Detail[idx] || ''}<br/>
                タグ:{tags[idx] || ''}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </ul>
    </Box>  
  );
};

export default ListBox;