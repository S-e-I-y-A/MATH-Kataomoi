import { Card, Typography, CardContent, CardHeader, } from '@mui/material';

function List() {
  return (
    <>
    <Card sx={{m:2,px:4,py:2}}>
      <CardHeader title="タイトル" sx={{p:0}}/> 
      <CardContent sx={{p:0}}>
        <Typography variant="body2" sx={{
          color: 'text.secondary',
          fontSize: 15,
          }}>
          やること
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default List
