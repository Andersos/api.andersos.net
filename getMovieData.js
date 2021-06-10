const fs = require("fs");
const fetch = require("node-fetch");
const apikey = require("./secrets"); // eslint-disable-line import/no-unresolved

function w2f(movie) {
  console.log(`You rated ${movie.Title} ${movie["Your Rating"]} of 10.`);
  fs.writeFileSync("newMovie.json", JSON.stringify(movie));
}

async function getMovieData(id, moreData) {
  return fetch(`http://www.omdbapi.com/?i=${id}&apikey=${apikey}`)
    .then((r) => r.json())
    .then((movie) =>
      Object.assign(movie, moreData, {
        URL: `https://www.imdb.com/title/${movie.imdbID}`,
      })
    );
}

async function writeMovieDataToFile(id, moreData) {
  const result = await getMovieData(id, moreData);
  w2f(result);
}

writeMovieDataToFile("tt14544192", {
  Const: "tt1959563",
  "Your Rating": 6,
  "Date Watched": "2021-06-09",
  "Date Rated": "2021-06-10",
  Source: "Netflix",
});
