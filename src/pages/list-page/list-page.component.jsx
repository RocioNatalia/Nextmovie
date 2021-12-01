import React from 'react';
import Footer from '../../components/footer/footer.component';
import MoviesList from '../../components/movie-list/movie-list.component';
import Navbar from '../../components/navbar/navbar.component';

const ListPage = () => (
  <div className='browse'>
    <Navbar />
    <MoviesList />
    <Footer />
  </div>
);

export default ListPage;
