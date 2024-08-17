import { useEffect, useState } from "react";
import MovieCard from "../movie-card/MovieCard";
import NavBar from "../navbar/NavBar";
import "./home.css";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setMovies, setFilteredMovies, setFavourites } from "../../slice/movieReducer";
import { Pagination } from "../pagination/Pagination";

export const HomePage = () => {
  const dispatch = useDispatch();
  const { movies, filteredMovies, favourites } = useSelector((state) => state.movies);
  const [searchValue, setSearchValue] = useState("");
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  

  useEffect(() => {
    if (searchValue) {
      axios
        .get(
          `http://localhost:5000/movies/search?query=${searchValue}&page=${currentPage}`
        )
        .then((res) => {
          const { totalPages,movies } = res.data;
  
          setTotalPages(totalPages);
          dispatch(setFilteredMovies(movies));
        });
    } else {
      axios
        .get(`http://localhost:5000/movies?page=${currentPage}`)
        .then((res) => {
          const { totalPages,movies } = res.data;
          setTotalPages(totalPages);
          dispatch(setMovies(movies));
        });
    }
  }, [currentPage, searchValue]);

  const addtoFavourites = (movie)=>{
    dispatch(setFavourites(movie))
    
  }

  
  console.log(favourites)
  
  

  return (
    <>
      <NavBar setSearchValue={setSearchValue} />
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
    </>
  );
};
