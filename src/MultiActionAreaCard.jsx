import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function MultiActionAreaCard({ title, description, imageLink, onClick }) {
  return (
    <Card 
      sx={{ maxWidth: 345, height: '100%' }}
      onClick={onClick} // Add the onClick handler here
    >
      <CardActionArea sx={{ height: '100%' }}>
        <CardMedia
          component="img"
          height="140"
          image={imageLink}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}