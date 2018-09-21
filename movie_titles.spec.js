const { getMovieTitles } = require('./movie_titles');

test('getMovieTitles return correct results for "spiderman"', done => {
  getMovieTitles('spiderman').then(movieTitles => {
    expect(movieTitles).toEqual([
      "Amazing Spiderman Syndrome",
      "Fighting, Flying and Driving: The Stunts of Spiderman 3",
      "Hollywood's Master Storytellers: Spiderman Live",
      "Italian Spiderman",
      "Spiderman",
      "Spiderman",
      "Spiderman 5",
      "Spiderman and Grandma",
      "Spiderman in Cannes",
      "Superman, Spiderman or Batman",
      "The Amazing Spiderman T4 Premiere Special",
      "The Death of Spiderman",
      "They Call Me Spiderman"
    ]);
    done();
  });
});