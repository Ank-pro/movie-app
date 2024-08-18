const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Movie = require('./model/movies');
const port = 5000;
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(() => console.log("Database connected"))

app.get('/movies', async (req, res) => {
    const currentPage = parseInt(req.query.page);
    const genre = req.query.genre;
    const limit = 20;
    let movies = [];
    let countMovies = 0;
    let totalPages = 0;
    const moviesToSkip = (currentPage - 1) * limit;
    if (genre !== 'all') {
        const genrePattern = new RegExp(`\\b${genre}\\b`, 'i');
        countMovies = await Movie.find({ genre: genrePattern }).countDocuments();
        totalPages = Math.ceil(countMovies / limit);
        movies = await Movie.find({ genre: genrePattern }).skip(moviesToSkip).limit(limit);
    }
    else {
        countMovies = await Movie.countDocuments();
        totalPages = Math.ceil(countMovies / limit);
        movies = await Movie.find().skip(moviesToSkip).limit(20);
    }
    
    res.send(
        {
            movies,
            countMovies,
            totalPages
        }

    );
})

app.get('/movies/search', async (req, res) => {
    const { query, page , genre } = req.query;
    const limit = 20;

    if (!query) {
        res.send('Nothing to search');
        return;
    }

    let searchQuery = {name : new RegExp(query, 'i')}
    if( genre !== 'all'){
        const genrePattern = new RegExp(`\\b${genre}\\b`, 'i');
        searchQuery.genre = genrePattern;
    }
    const countMovies = await Movie.find(searchQuery).countDocuments();
    const totalPages = Math.ceil(countMovies / limit);

    const moviesToSkip = (page - 1) * limit;
    const movies = await Movie.find(searchQuery).skip(moviesToSkip).limit(20);

    res.send({ movies, totalPages });
})

app.listen(port, () => {
    console.log(`Listening to ${port}`)
})