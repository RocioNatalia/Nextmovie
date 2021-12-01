import React from 'react';
import DATA_MOVIES from '../../data/movies.data';

import './movie-list.style.scss';
import MovieItem from '../movie-item/movie-item.component';

class MoviesList extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: DATA_MOVIES,
    };
  }

  render() {
    return (
      <div className='movie-list'>
        <div className='list-title'>My list</div>
        <div className='list-container'>
          {this.state.movies
            .filter((movies) => movies.fav)
            .map((movie) => (
              <div className='list-item'>
                <MovieItem key={movie.id} movie={movie} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default MoviesList;
