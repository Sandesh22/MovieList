import React from "react";

function Movies({ movieList }) {
  console.dir(movieList.length);
  var movies = <div data-testid="no-result">No Results Found</div>;

  if (movieList.length > 0) {
    var movies = movieList.map((moview) => (
      <li key={moview.imdbID} className="slide-up-fade-in py-10">
        {moview.Title}
      </li>
    ));
  }

  return movies;
}

export default Movies;
