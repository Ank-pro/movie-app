const express = require('express')
const app = express();
const cors = require('cors')
const mongoose = require('mongoose');
const Movie = require('./model/movies');
const port = 5000;
app.use(express.json())
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(()=>console.log("Database connected"))

app.get('/movies',async (req,res)=>{
    const currentPage = parseInt(req.query.page);
    const limit = 20;
    const countMovies = await Movie.countDocuments();
    const totalPages = Math.ceil(countMovies/limit);

    const moviesToSkip = (currentPage - 1) * limit;
    const movies = await Movie.find().skip(moviesToSkip).limit(20);
    res.send(
        {movies,
        countMovies,
        totalPages}
           
);
})

app.get('/movies/search',async (req,res)=>{
    const {query,page=1} = req.query;
    const limit = 20;
    
    if(!query){
        res.send('Nothing to search');
        return;
    }
    const countMovies = await Movie.find({name : { $regex: `^${query}`, $options: 'i' }}).countDocuments();
    const totalPages = Math.ceil(countMovies/limit);

    const moviesToSkip = (page - 1) * limit;
    const movies = await Movie.find({name : { $regex: `^${query}`, $options: 'i' }}).skip(moviesToSkip).limit(20);
    
    res.send({movies,totalPages});
})

app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})