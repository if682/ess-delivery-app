import React from "react";
import Header from "../../components/Header";
import WatchlistHeader from "./WatchlistHeader";
import Movie from "../../components/Movie";
import "./styles.css";

const Watchlist = () => {
  const movies = [
    { title: "The Godfather", year: 1972 },
    { title: "Come and See", year: 1985 },
    { title: "Movie 3", year: 2021 },
    { title: "Movie 4", year: 2021 },
    { title: "Movie 5", year: 2021 },
    { title: "Movie 6", year: 2021 },
    { title: "Movie 7", year: 2021 }
  ];

  const listName = "Watchlist";

  return (
    <div className="watchlist-page">
      <Header />
      <WatchlistHeader userAvatar="../../assets/profile-pic.svg" username="Mia Goth" listName={listName} />
      <div className="movies-grid">
        {movies.map((movie, index) => (
          <Movie key={index} poster="../../assets/movie-poster.svg" title={movie.title} year={movie.year} />
        ))}
      </div>
    </div>
  );
};

export default Watchlist;
