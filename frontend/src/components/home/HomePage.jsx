import { useEffect, useState } from "react";
import MovieCard from "../movie-card/MovieCard";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMovies, setFilteredMovies, setFavourites } from "../../slice/movieReducer";
import { Pagination } from "../pagination/Pagination";

export const HomePage = ({searchValue}) => {
  const dispatch = useDispatch();
  const { movies, filteredMovies, favourites, genre } = useSelector((state) => state.movies);

  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    if (searchValue) {
      axios
        .get(
          `http://localhost:5000/movies/search?query=${searchValue}&page=${currentPage}&genre=${genre}`
        )
        .then((res) => {
          const { totalPages,movies } = res.data;
          console.log(movies);
          setTotalPages(totalPages);
          dispatch(setFilteredMovies(movies));
        });
    } else {
      axios
        .get(`http://localhost:5000/movies?page=${currentPage}&genre=${genre}`)
        .then((res) => {
          const { totalPages,movies } = res.data;
          setTotalPages(totalPages);
          dispatch(setMovies(movies));
        });
    }
  }, [currentPage, searchValue,genre]);

  const addtoFavourites = (movie)=>{
    dispatch(setFavourites(movie))
    
  }

  return (
    <div className="home-page">
      <Pagination totalPages={totalPages} setCurrentPage={setCurrentPage} />
      <div className="movie-list">
        {(searchValue
          ? filteredMovies : movies).map((movie) => {
              return (
                <MovieCard
                  key={movie._id}
                  movie={movie}
                  toggleFavourite = {()=>addtoFavourites(movie)}
                  
                />
              );
          })}
      </div>
    </div>
  );
};
