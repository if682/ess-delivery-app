import Header from "../../components/Header";
import MovieInfoCard from "../../components/MovieInfoCard";
import FeedbackSvg from "../../assets/feedback.svg";
import StarSvg from "../../assets/star.svg";
import "./styles.css";

function MovieInfo() {
  const movieInfo = {
    image:
    localStorage.getItem('posterPath'),
    name: localStorage.getItem('title'),
    year: localStorage.getItem('year'),
    parentalRating: "14",
    duration: localStorage.getItem('duration'),
    description:localStorage.getItem('description'),
    rating: "9.5",
  };

  const reviews = [
    {
      reviewerPhoto:
        "https://pps.whatsapp.net/v/t61.24694-24/148449595_807364704002205_321940956869464591_n.jpg?ccb=11-4&oh=01_AdT3Ycv2qija3VLg7NbsMKi02tilouTLQ4NO6xP63lbvuQ&oe=643D8A3E",
      reviewerName: "Nautilas",
      reviewText: "Achei balaaaaaaaaa",
      reviewRating: "9.5",
    },
    {
      reviewerPhoto:
        "https://pps.whatsapp.net/v/t61.24694-24/317771843_575105594073385_510856760757300496_n.jpg?ccb=11-4&oh=01_AdRGY9uIF0NIkuDUZNFfrpZjBEeiqWSQiQy1qKjx9cYcOA&oe=643D8B23",
      reviewerName: "Mateus Elias",
      reviewText: "Apenas e somente",
      reviewRating: "10",
    },
  ];

  return (
    <div className="page">
      <Header />
      <MovieInfoCard {...movieInfo} />
      <div className="reviews">
        <div className="reviewsTitle">
          <img className="reviewFeedbackSvg" alt={"Feedback icon"} src={FeedbackSvg} />
          Reviews
        </div>
        <hr className="reviewsHr" />
        {reviews.map((review, index) => {
          return (
            <>
              <div key={review.reviewerName} className="singleReview">
                <img
                  className="singleReviewImage"
                  src={review.reviewerPhoto}
                  alt={`Foto de ${review.reviewerName}`}
                />
                <div className="reviewBox">
                  <div className="reviewedBy">
                    <div>
                      Reviewed by <b>{review.reviewerName}</b>
                    </div>
                    <img className="reviewStarSvg" src={StarSvg} alt={"Star icon"} />
                    {review.reviewRating}/10
                  </div>
                  <div className="reviewText">{review.reviewText}</div>
                </div>
              </div>
              {index < reviews.length - 1 && <hr className="singleReviewHr" />}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default MovieInfo;
