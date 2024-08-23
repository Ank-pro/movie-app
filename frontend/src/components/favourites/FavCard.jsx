import './fav.css'
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import StarsIcon from "@mui/icons-material/Stars";
import Icon from "@mui/material/Icon";
import { useDispatch } from 'react-redux';


export const FavCard = ({movie,handleRemove}) => {
    const {name,director_name,_id,writter_name,genre,duration,img_link} = movie;

  const removeFav = ()=>{
    handleRemove(movie);
  }

    return (
    <div className="fav-container">
      <div className="card">
        <div className="image">
          <img src={img_link} alt='movie-poster'/>
        </div>
        <div className="movie-details">
          <div className="detail">
            <div className="name">{name}</div>
            <div className="director">Directed By : {director_name}</div>
            <div className="writer">Written By : {writter_name}</div>
            <div className="genre">Genre : {genre}</div>
            <div className="duration">Duration : {duration} mins</div>
          </div>
          <div className="ratings">
            <div className="remove-fav">
            <IconButton aria-label="add to favorites" onClick={removeFav}>
          <FavoriteIcon  style={{color : "red"}}/>
        </IconButton>
        <p>Remove Favourites</p>
            </div>
            {/* <div className="fav-rating">
            <Icon style={{ marginLeft: "1rem" ,height : '3rem',width : '4rem',}}>
          <StarsIcon style={{ color: "grey" ,position :'relative',top : '12px',left : '0.5rem'}} />
        </Icon>
              <p>{imdb_rating.toFixed(1)}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
