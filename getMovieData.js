const fs = require('fs');
const fetch = require('node-fetch');
const apikey = require('./secrets');

function w2f(movie) {
  console.log(`You rated ${movie.Title} ${movie['Your Rating']} of 10.`);
  fs.writeFileSync('newMovie.json', JSON.stringify(movie));
}

async function getMovieData(id, moreData) {
  return fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
    .then(r => r.json())
    .then(movie => Object.assign(movie, moreData, {
      URL: `https://www.imdb.com/title/${movie.imdbID}`,
    }));
}

async function writeMovieDataToFile(id, moreData) {
  const result = await getMovieData(id, moreData);
  w2f(result);
}

writeMovieDataToFile('tt0093779', {
  Const: 'tt0093779',
  'Your Rating': 7,
  'Date Watched': '2019-07-6',
  'Date Rated': '2019-07-8',
  Source: 'Netflix',
});
