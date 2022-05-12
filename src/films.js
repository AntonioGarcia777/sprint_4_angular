const movies = require("./data");

// Exercise 1: Get the array of all directors.
function getAllDirectors(movies) {
  let result =  movies.map (movie => movie.director);  
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  let result = movies.filter(movie => movie.director == director);
  console.log("EXERCICE 2 ->", result);
  return result; 
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {
  let scores = movies.filter(movie => movie.director == director).map(movie => movie.score);  
  let result = parseFloat(scores.reduce((a, b) => a + b/scores.length, 0).toFixed(2));
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let titles = movies.map(movie => movie.title);
  let result = titles.sort().slice(0, 20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let result = [...movies].sort(function (a, b) {
    // Movies by year
    if (a.year > b.year) return 1;
    if (a.year < b.year) return -1;
  
    // Movies of the same year sorted alphabetically
    if (a.title > b.title) return 1;
    if (a.title < b.title) return -1;
  });
  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let scores = movies.filter(movie => {
    if (movie.genre.includes(category) && (movie.score !== "")) return true;
    }).map(movie => movie.score);
  let result = parseFloat(scores.reduce((a, b) => a + b/scores.length, 0).toFixed(2));
  console.log("EXERCICE 6 ->", result);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
  let result = JSON.parse(JSON.stringify(movies));
  result.map(function (movie) {
    let match = movie.duration.match(/\d+/g).map(Number);
    let hours = 0;
    let minutes = 0;
    if (match[0]) {
      hours = match[0] * 60;
    }
    if (match[1]) {
      minutes = match[1];
    }
    movie.duration = hours + minutes;
  });
  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  let filteryear = [...movies].filter(movie => movie.year === year);
  let bestscore = filteryear.map(movie => movie.score).reduce(function(a, b) {
      return Math.max(a, b);
  }, 0);                    

  let result = filteryear.filter(movie => movie.score === bestscore);
  console.log("EXERCICE 8 ->", result);
  return result;  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
