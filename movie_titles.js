const { rp } = require('request-promise');

const URL = "https://jsonmock.hackerrank.com/api/movies/search/?Title=foo&page=1"

exports.getMovieTitles = (substr) => {
  const results = [];

  const firstPageResults = getResults(substr, 1);

  firstPageResults.then(function (resp) {
    console.log(resp);
  });

  return results;
}

getResults = (title, page) => { return rp(`https://jsonmock.hackerrank.com/api/movies/search/?Title=${title}&page=${page}`); }