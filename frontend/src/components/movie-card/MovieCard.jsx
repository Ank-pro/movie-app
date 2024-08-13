import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MovieCard({movie}) {
  const {name,director_name,writter_name,genre,img_link} = movie;
  return (
    <Card sx={{ maxWidth: 350 , maxHeight : 600}}>
      <CardMedia
        sx={{ height: 400}}
        image={img_link}
        title=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Directed By : {director_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Written By : {writter_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Genre : {genre}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
