import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies : [],
    filteredMovies : [],
    favourites : [],
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
        },
        setFavourites : (state,action)=>{
            const movie = action.payload;         
            const isMovie = state.favourites.find(item => item._id === movie._id)
            if(!isMovie){
            state.favourites.push(movie);
            }else{
                const newList = state.favourites.filter(item => item._id !== movie._id);
                state.favourites = newList;
            }
        }
    }
})

export const {setMovies,setFilteredMovies,setFavourites} = movieReducer.actions;

export default movieReducer.reducer;