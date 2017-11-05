const assert = require('assert');
const boardgames = require('../boardgames.json');
const books = require('../books.json');
const series = require('../series.json');
const activity = require('../activity.json');

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

describe('The books api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(books));
  });
});

describe('The boardgames api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(boardgames));
  });
});

describe('The series api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(series));
  });
});

describe('The activity api', () => {
  it('is valid JSON', () => {
    assert(isValidJSON(activity));
  });
});
