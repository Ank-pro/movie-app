import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import StarsIcon from "@mui/icons-material/Stars";
import Icon from "@mui/material/Icon";

// Function to generate a tiny, blurred placeholder
const getBlurredImageUrl = (url) => {
  return `${url}?w=10&blur=5`;
};

export default function MovieCard({ movie }) {
  const {
    name,
    director_name,
    writter_name,
    genre,
    img_link,
    duration,
    imdb_rating,
  } = movie;

  return (
    <Card sx={{ maxWidth: 350, display: "flex", flexDirection: "column" }}>
      <div style={{ width: "100%", height: "370px", position: "relative" }}>
        <LazyLoadImage
          alt={name}
          src={img_link}
          placeholderSrc={getBlurredImageUrl(img_link)}
          effect="blur"
          wrapperProps={{
            style: {
              width: "100%",
              height: "100%",
            },
          }}
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
            position: "relative",
          }}
        />
      </div>
      <CardContent
        sx={{ flex: "1 1 auto", overflow: "auto", paddingBottom: 0 }}
      >
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
        <Typography variant="body2" color="text.secondary">
          Duration : {duration} mins
        </Typography>
      </CardContent>
      <CardActions sx={{ marginTop: 0 }}>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon style={{color : 'red'}}/>
        </IconButton>
        <div style={{ margin: 0, fontFamily: "sans-serif" }}>
          Add to Favourites
        </div>
        <Icon style={{ marginLeft: "1rem" }}>
          <StarsIcon style={{ color: "grey" }} />
        </Icon>
        <div
          style={{ marginLeft: "2px", color: "grey", fontFamily: "sans-serif" }}
        >
          Rating:
        </div>
        <div
          style={{
            fontWeight: "bolder",
            marginLeft: "5px",
            backgroundColor: "goldenrod",
            padding : '3px',
            borderRadius : '7px',
            color : 'whitesmoke'
          }}
        >
          {imdb_rating.toFixed(1)}
        </div>
      </CardActions>
    </Card>
  );
}
