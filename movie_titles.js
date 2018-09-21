const rp = require('request-promise');

exports.getMovieTitles = keyword => {
  return getNumOfPages(keyword)
    .then(numOfPages => buildRangeOfPages(numOfPages))
    .map(currentPage => fetchResultsPage(keyword, currentPage))
    .map(currentResult => extractMovieTitles(currentResult))
    .reduce((previous, current) => previous.concat(current), [])
    .then(results => results.sort());
}

extractMovieTitles = apiResponse => {
  const movieTitles = [];
  apiResponse['data'].forEach(poster => {
      movieTitles.push(poster['Title']);
  });
  return movieTitles;
}

getNumOfPages = keyword => fetchResultsPage(keyword).then(resp => resp['total_pages']);

fetchResultsPage = (keyword, page) => {
	const options = {
      uri: `https://jsonmock.hackerrank.com/api/movies/search/`,
      qs: {
      	Title: `${keyword}`,
      	page: `${page}`
      },
      json: true
	};
	return rp(options);
}

buildRangeOfPages = numOfPages => [...Array(numOfPages).keys()].map(i => i + 1);