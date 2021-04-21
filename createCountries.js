const fs = require("fs");

function w2f(countries) {
  fs.writeFileSync("countries.json", JSON.stringify(countries));
}

const countries = [];
const trips = require("./trips.json");

trips.forEach((trip) => {
  if (trip.location.country && !countries.includes(trip.location.country)) {
    countries.push(trip.location.country);
  }
});

w2f(countries);
