import MovieInfoOptions from "../MovieInfoOptions";
import "./styles.css";

function MovieInfoCard({
  movieContext
}) {
  return (
    <div className="mainDiv">
      <img className="image" src={movieContext.posterPath} alt={"Movie poster"} />
      <div className="secondaryDiv">
        <div className="name">{movieContext.title}</div>
        <div className="infos">
          {movieContext.releaseDate} - {movieContext.duration}
        </div>
        <div className="description">{movieContext.description}</div>
      </div>
      <MovieInfoOptions movieContext={movieContext} />
    </div>
  );
}

export default MovieInfoCard;
