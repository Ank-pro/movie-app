import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies : [],
    filteredMovies : [],
}

const movieReducer = createSlice({
    name : 'movies',
    initialState,
    reducers : {
        setMovies : (state,action)=>{
            state.movies = action.payload;
        },
        setFilteredMovies : (state,action)=>{
            state.filteredMovies = action.payload;
        }
    }
})

export const {setMovies,setFilteredMovies} = movieReducer.actions;

export default movieReducer.reducer;