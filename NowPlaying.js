import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NowPlaying.module.css';
import movie1 from './images/movie1.jpg';

function NowPlaying() {
  const posters = [
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 1 },
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 2 },
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 3 },
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 4 },
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 5 },
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 6 },
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 7 },
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 8 },
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 9 },
    { src: movie1, title: 'Avengers: Endgame', trailerUrl: 'https://www.youtube.com/watch?v=TcMBFSGVi1c', id: 10 },
  ];

  return (
    <div className={styles.pageContainer}>
      <h2>Now Playing</h2>
      <div className={styles.moviePosterContainer}>
        {posters.map((poster, index) => (
          <div key={index} className={styles.moviePosterItem}>
            <div className={styles.posterContainer}>
              <img src={poster.src} alt={poster.title} className={styles.moviePoster} />
              <div className={styles.darkOverlay}></div>
            </div>
            <div className={styles.overlay}>
              <button className={`${styles.btn} ${styles.btnWhite}`} onClick={() => window.open(poster.trailerUrl, '_blank')}>
                Watch Trailer
              </button>
              <Link to={`/movie/${poster.id}`} className={`${styles.btn} ${styles.btnRed}`}>
                Get Ticket
              </Link>
            </div>
            <div className={styles.movieTitle}>{poster.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NowPlaying;
