import { useEffect } from "react";
import MovieCard from "../movie-card/MovieCard";
import NavBar from "../navbar/NavBar";
import './home.css'
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { setMovies } from "../../slice/movieReducer";

export const HomePage = () => {

  const dispatch = useDispatch();
  const {movies} = useSelector(state => state.movies);

  useEffect(()=>{
    axios.get("http://localhost:5000/movies")
      .then(res => {
        const {data} = res;
        dispatch(setMovies(data));
      })
    
  },[])

  return (
    <>
      <NavBar />
      <div className="movie-list">
        {
          movies.map((movie)=>{
            return <MovieCard key={movie._id} movie={movie}/>
          })
        }
      </div>
    </>
  );
};
