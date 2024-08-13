import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    movies : []
}

const movieReducer = createSlice({
    name : 'movies',
    initialState,
    reducers : {
        setMovies : (state,action)=>{
            state.movies = action.payload;
        }
    }
})

export const {setMovies} = movieReducer.actions;

export default movieReducer.reducer;