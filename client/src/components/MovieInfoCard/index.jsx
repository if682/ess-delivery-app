import MovieInfoOptions from "../MovieInfoOptions";
import "./styles.css";

function MovieInfoCard({
  image,
  name,
  year,
  parentalRating,
  duration,
  description,
  rating,
}) {
  return (
    <div className="mainDiv">
      <img className="image" src={image} alt={"Movie" + { name }} />
      <div className="secondaryDiv">
        <div className="name">{name}</div>
        <div className="infos">
          {year} - {parentalRating} - {duration}
        </div>
        <div className="description">{description}</div>
      </div>
      <MovieInfoOptions rating={rating} />
    </div>
  );
}

export default MovieInfoCard;
