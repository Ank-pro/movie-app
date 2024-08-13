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
    const {page,limit} = req.query;
    const movies = await Movie.find();
    res.send(movies);
})

app.get('/movies/search',async (req,res)=>{
    const {query} = req.query

    if(!query){
        res.send('Nothing to search');
        return;
    }
    const movies = await Movie.find({name : new RegExp(query,'i')});
    res.send(movies);
})

app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})