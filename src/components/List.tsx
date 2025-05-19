import { Card, Typography, CardContent, } from '@mui/material';

function List() {
  return (
    <>
    <Card sx={{m:2,px:7,py:0}}>
      <CardContent>
        <Typography gutterBottom sx={{
          textAlign:'right',
          fontSize: 30 
          }}>
          Title
        </Typography>
        <Typography variant="body2" sx={{
          color: 'text.secondary',
          fontSize: 15
          }}>
          やること
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default List
