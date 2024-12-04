import React, { useState } from 'react';

function Upcoming() {
  const [upcomingMovies, setUpcomingMovies] = useState([
    { title: 'Upcoming Movie 1', releaseDate: '2024-12-01', posterUrl: '' },
    { title: 'Upcoming Movie 2', releaseDate: '2024-12-05', posterUrl: '' },
    { title: 'Upcoming Movie 3', releaseDate: '2024-12-10', posterUrl: '' },
    { title: 'Upcoming Movie 4', releaseDate: '2024-12-15', posterUrl: '' },
    { title: 'Upcoming Movie 5', releaseDate: '2024-12-20', posterUrl: '' },
    { title: 'Upcoming Movie 6', releaseDate: '2024-12-25', posterUrl: '' },
  ]);

  const handlePosterChange = (index, value) => {
    const updatedMovies = [...upcomingMovies];
    updatedMovies[index].posterUrl = value;
    setUpcomingMovies(updatedMovies);
  };

  return (
    <div className="page-container">
      <h2>Upcoming Movies</h2>
      <div className="movie-cards-container">
        {upcomingMovies.map((movie, index) => (
          <div key={index} className="movie-card">
            <div className="poster-input">
              <input
                type="text"
                placeholder="Enter poster URL"
                value={movie.posterUrl}
                onChange={(e) => handlePosterChange(index, e.target.value)}
              />
            </div>
            {movie.posterUrl && (
              <img src={movie.posterUrl} alt={movie.title} className="movie-poster" />
            )}
            <h3>{movie.title}</h3>
            <p>Release Date: {movie.releaseDate}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
