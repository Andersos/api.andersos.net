const fs = require("fs");

function addType(array, type) {
  return array.map((element) => ({ ...element, type }));
}

function removeNoDate(array) {
  return array.filter((element) => Object.hasOwnProperty.call(element, "date"));
}

function addDateFromProperty(array, property) {
  return array
    .filter((element) => Object.hasOwnProperty.call(element, property))
    .map((element) => ({ ...element, date: element[property] }));
}

function w2f(timeline) {
  fs.writeFileSync("timeline.json", JSON.stringify(timeline));
  fs.writeFileSync(
    "shorttimeline.json",
    JSON.stringify(timeline.slice(0, 199))
  );
}

const activity = addType(require("./activity.json"), "🚶‍♂️");
const blood = addType(require("./blood.json"), "🩸");
const books = addDateFromProperty(
  addType(require("./books.json"), "📖"),
  "read"
);
const playerlog = addType(require("./playerlog.json"), "🎲");
const courses = addType(require("./courses.json"), "📜");
const divelog = removeNoDate(addType(require("./divelog.json"), "🤿"));
const movies = addDateFromProperty(
  addType(require("./movies.json"), "🎬"),
  "Date Watched"
);
const photos = addDateFromProperty(
  addType(require("./photostream.json").photos, "📷"),
  "taken_at"
);
const videos = addDateFromProperty(
  addType(require("./photostream.json").videos, "📹"),
  "taken_at"
);

const timeline = [
  ...blood,
  ...divelog,
  ...playerlog,
  ...books,
  ...courses,
  ...activity,
  ...movies,
  ...photos,
  ...videos,
  // culture
  // trips
  // runs / trening
  // podcast
  // series
];

timeline.sort((a, b) => new Date(b.date) - new Date(a.date));
w2f(timeline);
