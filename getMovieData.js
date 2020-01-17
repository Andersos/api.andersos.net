const fs = require("fs");
const fetch = require("node-fetch");
const apikey = require("./secrets");

function w2f(movie) {
  console.log(`You rated ${movie.Title} ${movie["Your Rating"]} of 10.`);
  fs.writeFileSync("newMovie.json", JSON.stringify(movie));
}

async function getMovieData(id, moreData) {
  return fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
    .then(r => r.json())
    .then(movie =>
      Object.assign(movie, moreData, {
        URL: `https://www.imdb.com/title/${movie.imdbID}`
      })
    );
}

async function writeMovieDataToFile(id, moreData) {
  const result = await getMovieData(id, moreData);
  w2f(result);
}

writeMovieDataToFile("tt8946378", {
  Const: "tt8946378",
  "Your Rating": 7,
  "Date Watched": "2020-01-04",
  "Date Rated": "2020-01-17",
  Source: "Frogner Kino"
});
