import { useEffect, useState } from "react";
import MovieCard from "../movie-card/MovieCard";
import NavBar from "../navbar/NavBar";
import './home.css'
import {useDispatch,useSelector} from 'react-redux';
import axios from 'axios';
import { setMovies,setFilteredMovies } from "../../slice/movieReducer";
import { Pagination } from "../pagination/Pagination";

export const HomePage = () => {

  const dispatch = useDispatch();
  const {movies ,filteredMovies} = useSelector(state => state.movies);
  const [searchValue,setSearchValue] = useState('');

  useEffect(()=>{
    axios.get(`http://localhost:5000/movies?page=${currentPage}&offset=`)
      .then(res => {
        const {data} = res;
        dispatch(setMovies(data));       
      })
    
  },[])

  const fetchPageData = ()=>{

  }

  useEffect(()=>{
    if(searchValue){
    axios.get(`http://localhost:5000/movies/search?query=${searchValue}`)
      .then(res => {
        dispatch(setFilteredMovies(res.data))
      })
    }
  },[searchValue])
  
  return (
    <>
      <NavBar setSearchValue={setSearchValue}/>
      <Pagination/>
      <div className="movie-list">
        {
          searchValue ?
            filteredMovies.map((movie)=>{
              return <MovieCard key={movie._id} movie={movie}/>
            })
          :
          movies.map((movie)=>{
            return <MovieCard key={movie._id} movie={movie}/>
          })
        
        }
      </div>
    </>
  );
};
