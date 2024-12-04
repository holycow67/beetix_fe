import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './MovieDetail.module.css';
import moviePoster from './images/movie1.jpg';

function MovieDetail() {
  const { movieId } = useParams();
  const navigate = useNavigate();


  const movie = {
    title: "Avengers: Endgame",
    genre: "Action, Superhero, Sci-Fi, Fantasy",
    producer: "Kevin Feige",
    director: "Anthony Russo, Joe Russo",
    casts: "Robert Downey Jr, Chris Evans, Mark Ruffalo, Chris Hemsworth, Scarlett Johansson, Jeremy Renner",
    duration: "181 min",
    rating: "PG-13",
    synopsis: "After Thanos, an intergalactic warlord, disintegrates half of the universe, the Avengers must reunite and assemble again to reinvigorate their trounced allies and restore balance.",
    posterUrl: moviePoster, 
  };

  const handleBackToNowPlaying = () => {
    navigate('/');
  };

  return (
    <div className={styles.movieDetailContainer}>
      <div className={styles.movieCard}>
        <h2>{movie.title}</h2>

        <div className={styles.movieDetailContent}>
          <div className={styles.moviePosterContainer}>
            <img src={movie.posterUrl} alt={movie.title} className={styles.moviePoster} />
          </div>

          <div className={styles.movieInfo}>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Producer:</strong> {movie.producer}</p>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Casts:</strong> {movie.casts}</p>
            <p><strong>Duration:</strong> {movie.duration}</p>
            <p><strong>Age Rating:</strong> {movie.rating}</p>
            <div className={styles.movieSynopsis}>
              <h3>Synopsis</h3>
              <p>{movie.synopsis}</p>
            </div>
          </div>
        </div>

        <div className={styles.movieButtons}>
          <button className={`${styles.btn} ${styles.btnRed}`}>Buy Ticket</button>
          <button className={`${styles.btn} ${styles.btnWhite}`} onClick={handleBackToNowPlaying}>Back to Now Playing</button>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
