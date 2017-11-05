const activity = require('../activity.json');
const assert = require('assert');
const blood = require('../blood.json');
const boardgames = require('../boardgames.json');
const books = require('../books.json');
const culture = require('../culture.json');
const playerlog = require('../playerlog.json');
const podcasts = require('../podcasts.json');
const series = require('../series.json');
const trips = require('../trips.json');

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    /* eslint no-console: 0 */
    console.log(e);
    return false;
  }
  return true;
}

function isValidJSON(json) {
  return isJSON(JSON.stringify(json));
}

describe('The activity api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(activity));
  });
});

describe('The blood api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(blood));
  });
});

describe('The boardgames api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(boardgames));
  });
});

describe('The books api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(books));
  });
});

describe('The culture api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(culture));
  });
});

describe('The playerlog api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(playerlog));
  });
});

describe('The podcasts api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(podcasts));
  });
});

describe('The series api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(series));
  });
});

describe('The trips api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(trips));
  });
});
