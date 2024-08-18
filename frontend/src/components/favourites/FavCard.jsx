import './fav.css'

export const FavCard = ({movie}) => {
    const {name,director_name,writter_name,genre,duration,img_link} = movie;
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
          <div className="ratings"></div>
        </div>
      </div>
    </div>
  );
};
