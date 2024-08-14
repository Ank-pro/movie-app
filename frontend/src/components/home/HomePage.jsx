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
  const [totalPages, setTotalPages] = useState();
  const [currentPage,setCurrentPage] = useState(1);

  useEffect(()=>{
    if(searchValue){
      axios.get(`http://localhost:5000/movies/search?query=${searchValue}&page=${currentPage}`)
        .then(res => {
          setTotalPages(res.data.totalPages)
          dispatch(setFilteredMovies(res.data.movies))
        })
      }else{
    axios.get(`http://localhost:5000/movies?page=${currentPage}`)
      .then(res => {
        const {data} = res;
        console.log(data)
        setTotalPages(data.totalPages);
        dispatch(setMovies(data.movies));       
      })
    }
    
  },[currentPage,searchValue])

  
  return (
    <>
      <NavBar setSearchValue={setSearchValue}/>
      <Pagination totalPages = {totalPages} setCurrentPage={setCurrentPage}/>
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
