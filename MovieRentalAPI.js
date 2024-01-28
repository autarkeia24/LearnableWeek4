class Movie {
  constructor(title, genre, available) {
    this.title = title;
    this.genre = genre;
    this.available = available;
  }
}

class MovieApi {
  constructor() {
    this.movies = [];
  }

  addMovie(title, genre) {
    const newMovie = new Movie(title, genre, true);
    this.movies.push(newMovie);
    console.log(`"${title}" has been added to the library.`);
  }

  listMovies() {
    console.log("\n Movies in the library:");
    this.movies.forEach((movie) => {
      console.log(
        `* ${movie.title} (${movie.genre}) - ${
          movie.available ? "Available" : "Not Available"
        }`
      );
    });
  }
  
