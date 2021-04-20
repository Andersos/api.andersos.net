const assert = require("assert");
const { photos } = require("../photostream.json");
const { videos } = require("../photostream.json");
const activity = require("../activity.json");
const blood = require("../blood.json");
const boardgames = require("../boardgames.json");
const books = require("../books.json");
const divelog = require("../divelog.json");
const movies = require("../movies.json");
const playerlog = require("../playerlog.json");
const podcasts = require("../podcasts.json");
const posts = require("../posts.json");
const runs = require("../runs.json");
const series = require("../series.json");
const trips = require("../trips.json");
// const culture = require('../culture.json');

function ElementsHasProperty(elements, prop) {
  return elements.reduce((acc, value) => {
    const hasProp = Object.prototype.hasOwnProperty.call(value, prop);
    if (!hasProp) {
      console.log(value);
    }
    return acc && hasProp;
  }, true);
}

function validDate(elements) {
  return elements.reduce((acc, value) => {
    const hasValidDate = /\d{4}-\d{2}-\d{2}/.test(value.date);
    if (!hasValidDate) {
      console.log(value);
    }
    return acc && hasValidDate;
  }, true);
}

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

describe("The activity api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(activity));
  });

  describe("each record", () => {
    it("has date", () => {
      assert(ElementsHasProperty(activity, "date"));
    });

    it("has valid date", () => {
      assert(validDate(activity));
    });

    it("has steps", () => {
      assert(ElementsHasProperty(activity, "steps"));
    });
  });
});

describe("The blood api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(blood));
  });

  describe("each record", () => {
    it("has date", () => {
      assert(ElementsHasProperty(blood, "date"));
    });

    it("has valid date", () => {
      assert(validDate(blood));
    });

    it("has location", () => {
      assert(ElementsHasProperty(blood, "location"));
    });

    it("has HbF", () => {
      assert(ElementsHasProperty(blood, "HbF"));
    });

    it("has gift", () => {
      assert(ElementsHasProperty(blood, "gift"));
    });
  });
});

describe("The boardgames api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(boardgames));
  });

  describe("each record", () => {
    it("has name", () => {
      assert(ElementsHasProperty(boardgames, "name"));
    });

    it("has time", () => {
      assert(ElementsHasProperty(boardgames, "time"));
    });

    it("has minplayers", () => {
      assert(ElementsHasProperty(boardgames, "minplayers"));
    });

    it("has maxplayers", () => {
      assert(ElementsHasProperty(boardgames, "maxplayers"));
    });

    it("has link", () => {
      assert(ElementsHasProperty(boardgames, "link"));
    });

    it("has thumbnail", () => {
      assert(ElementsHasProperty(boardgames, "thumbnail"));
    });
  });
});

describe("The books api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(books));
  });

  describe("each record", () => {
    it("has name", () => {
      assert(ElementsHasProperty(books, "name"));
    });
  });
});

describe("The culture api", () => {
  it.skip("is valid JSON", () => {
    // TODO: Wait until culture api is updated
    // assert(isValidJSON(culture));
  });
});

describe("The playerlog", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(playerlog));
  });

  describe("each record", () => {
    it("has players", () => {
      assert(ElementsHasProperty(playerlog, "players"));
    });

    it("has date", () => {
      assert(ElementsHasProperty(playerlog, "date"));
    });

    it("has valid date", () => {
      assert(validDate(playerlog));
    });

    it("has game", () => {
      assert(ElementsHasProperty(playerlog, "game"));
    });

    it.skip("has winners", () => {
      const allHasWinners = playerlog.reduce((acc, value) => {
        const hasWinners = Object.prototype.hasOwnProperty.call(value, "winners");
        const noStats = Object.prototype.hasOwnProperty.call(value, "stats") && value.stats === false;
        const countWinners = hasWinners || noStats;
        if (!countWinners) {
          console.log(value);
        }
        return acc && countWinners;
      }, true);

      assert(allHasWinners);
    });
  });
});

describe("The podcasts api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(podcasts));
  });

  describe("each record", () => {
    it("has name", () => {
      assert(ElementsHasProperty(podcasts, "name"));
    });

    it("has last", () => {
      assert(ElementsHasProperty(podcasts, "last"));
    });
  });
});

describe("The movies api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(movies));
  });

  describe("each record", () => {
    it("has name", () => {
      assert(ElementsHasProperty(movies, "Title"));
    });

    it("has imdb id", () => {
      assert(ElementsHasProperty(movies, "Const"));
    });

    it("has date", () => {
      assert(ElementsHasProperty(movies, "Date Rated"));
    });

    it("has has rating", () => {
      assert(ElementsHasProperty(movies, "Your Rating"));
    });
  });
});

describe("The series api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(series));
  });

  describe("each record", () => {
    it("has name", () => {
      assert(ElementsHasProperty(series, "name"));
    });

    it("has lastWatched", () => {
      assert(ElementsHasProperty(series, "lastWatched"));
    });

    it.skip("has lastKnown", () => {
      assert(ElementsHasProperty(series, "lastKnown"));
    });
  });
});

describe("The trips api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(trips));
  });

  describe("each record", () => {
    it("has location", () => {
      assert(ElementsHasProperty(trips, "location"));
    });

    it("has startDate", () => {
      assert(ElementsHasProperty(trips, "startDate"));
    });
  });
});

describe("The divelog api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(divelog));
  });

  describe("each record", () => {
    it("has location", () => {
      assert(ElementsHasProperty(divelog.slice(1), "date"));
    });

    it("has startDate", () => {
      assert(ElementsHasProperty(divelog.slice(1), "location"));
    });
  });
});

describe("The photos api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(photos));
  });

  describe("each record", () => {
    it("has taken_at", () => {
      assert(ElementsHasProperty(photos, "taken_at"));
    });
  });
});

describe("The videos api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(videos));
  });

  describe("each record", () => {
    it("has taken_at", () => {
      assert(ElementsHasProperty(videos, "taken_at"));
    });
  });
});

describe("The posts api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(posts));
  });

  describe("each record", () => {
    it("has date", () => {
      assert(ElementsHasProperty(posts, "date"));
    });

    it("has title", () => {
      assert(ElementsHasProperty(posts, "title"));
    });

    it("has link", () => {
      assert(ElementsHasProperty(posts, "link"));
    });
  });
});

describe("The runs api", () => {
  it("is valid JSON", () => {
    assert(isValidJSON(runs));
  });

  describe("each record", () => {
    it("has date", () => {
      assert(ElementsHasProperty(runs, "date"));
    });

    it("has title", () => {
      assert(ElementsHasProperty(runs, "name"));
    });
  });
});
