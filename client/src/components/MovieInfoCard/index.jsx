import MovieInfoOptions from "../MovieInfoOptions";
import "./styles.css";

function MovieInfoCard({
  image,
  name,
  directorList,
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
        <div className="directorList">
          Directed by
          {directorList.map((directorName, index) => {
            return index < directorList.length - 1
              ? " " + directorName + ","
              : " " + directorName;
          })}
        </div>
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
