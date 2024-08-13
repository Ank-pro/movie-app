import {configureStore} from '@reduxjs/toolkit'
import movieReducer from '../slice/movieReducer'

export const store = configureStore({
    reducer : {
        movies : movieReducer
    }
})

