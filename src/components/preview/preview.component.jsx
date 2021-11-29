import React from 'react';
import DATA_MOVIES from '../../data/movies.data';
import DATA_GENRES from '../../data/genres.data';
import { Carousel } from '@trendyol-js/react-carousel';

import './preview.style.scss';
import MovieItem from '../movie-item/movie-item.component';

class Preview extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: DATA_MOVIES,
      genres: DATA_GENRES,
    };
  }

  render() {
    return (
      <div className='preview'>
        {this.state.genres.map((genre) => (
          <div className='carousel'>
            <h3>{genre.description}</h3>
            <Carousel
              show={window.innerWidth / 300}
              slide={4}
              transition={0.5}
              useArrowKeys={true}
              resposible={true}
            >
              {this.state.movies
                .filter((movies) => movies.genres[0] === genre.id)
                .filter((moviesXgenre, idx) => idx < 8)
                .map((movie) => (
                  <MovieItem key={movie.id} movie={movie} />
                ))}
            </Carousel>
          </div>
        ))}
      </div>
    );
  }
}

export default Preview;
