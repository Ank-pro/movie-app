const express = require('express')
const app = express();
const mongoose = require('mongoose');
const Movie = require('./model/movies');
const port = 5000;
app.use(express.json())

mongoose.connect('mongodb://127.0.0.1:27017/movies')
    .then(()=>console.log("Database connected"))

app.get('/movies',async (req,res)=>{
    const movies = await Movie.find();
    res.send(movies);
})

app.listen(port,()=>{
    console.log(`Listening to ${port}`)
})