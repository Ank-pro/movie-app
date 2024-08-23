import { useState } from "react";
import "./genre.css";
import { useDispatch, useSelector } from "react-redux";
import { getGenre } from "../slice/movieReducer";

const genres = [
  "All",
  "Drama",
  "Crime",
  "Action",
  "Biography",
  "History",
  "Adventure",
  "Romance",
  "Sci-Fi",
  "Western",
  "Mystery",
];
export const GenreDropdown = () => {
  const dispatch = useDispatch();
  const {genre} = useSelector(state=>state.movies);
  const handleOptions = (e)=>{
    dispatch(getGenre(e.target.value))
  }
  
  return (
    <div className="dropdown-container">
      <select className="styled-dropdown" onChange={handleOptions}>
        {genres.map((genre,index) => <option key={index} value={genre.toLowerCase()}>{genre}</option>)}
      </select>
    </div>
  );
};
