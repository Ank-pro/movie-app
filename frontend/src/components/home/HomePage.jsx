import MovieCard from "../movie-card/MovieCard";
import NavBar from "../navbar/NavBar";
import './home.css'

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div className="movie-list">
        <MovieCard/>
      </div>
    </>
  );
};
