import React from 'react';
import './movie-item.style.scss';

const MovieItem = ({ movie }) => (
  <div className='movie-item'>
    <div
      className='image'
      style={{
        background: `url('https://picsum.photos/600/400?random=${movie.imageUrl}')`,
        backgroundSize: 'cover',
      }}
    >
      <h2 className='title'> {movie.title}</h2>
    </div>
  </div>
);

export default MovieItem;
