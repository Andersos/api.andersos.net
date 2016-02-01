var assert = require('assert');
var boardgames = require('../boardgames.json');
var books = require('../books.json');
var series = require('../series.json');

describe('The books api', function () {
  it('is valid JSON', function () {
    assert(isValidJSON(books));
  });
});

describe('The boardgames api', function () {
  it('is valid JSON', function () {
    assert(isValidJSON(boardgames));
  });
});

describe('The series api', function () {
  it('is valid JSON', function () {
    assert(isValidJSON(series));
  });
});

function isValidJSON (json) {
  return isJSON(JSON.stringify(json));
}

function isJSON (str) {
  try {
    JSON.parse(str);
  } catch (e) {
    console.log(e);
    return false;
  }
  return true;
}
