const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  rank: Number,
  id: String,
  name: String,
  year: Number,
  imbd_votes: Number,
  imdb_rating: Number,
  certificate: String,
  duration: Number,
  genre: String,
  cast_id: String,
  cast_name: String,
  director_id: String,
  director_name: String,
  writter_name: String,
  writter_id: String,
  img_link: String
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;