import "./index.css";
import {
  IconStarFavoritesActive,
  IconStarFavoritesDesable,
} from "../../assets/icons";
import { useState } from "react";

interface PropsEvaluations {
  id: number;
  userName: string;
  text: string;
  star: number;
  reservationId: string;
  userId: string;
}

interface PropsEvaluateFild {
  evaliations: PropsEvaluations[];
}

export default function EvaluateFild() {
  const [evaliationValue, setEvaliationValue] = useState(0);
  const [tempEvaliationValue, setTempEvaliationValue] = useState(0);

  const setValueForEvaluation = (value: number) => {
    if (value === evaliationValue) {
      setEvaliationValue(0);
    } else {
      setEvaliationValue(value);
    }
  };

  return false ? (
    <></>
  ) : (
    <div className="evaluationContainer">
      <div className="evaluationHeader">
        <span>
          <button
            className="evaluationStar"
            onClick={() => setValueForEvaluation(1)}
            onMouseOver={() => setTempEvaliationValue(1)}
            onMouseOut={() => setTempEvaliationValue(evaliationValue)}
          >
            {evaliationValue >= 1 || tempEvaliationValue >= 1
              ? IconStarFavoritesActive
              : IconStarFavoritesDesable}
          </button>
          <button
            className="evaluationStar"
            onClick={() => setValueForEvaluation(2)}
            onMouseOver={() => setTempEvaliationValue(2)}
            onMouseOut={() => setTempEvaliationValue(evaliationValue)}
          >
            {evaliationValue >= 2 || tempEvaliationValue >= 2
              ? IconStarFavoritesActive
              : IconStarFavoritesDesable}
          </button>
          <button
            className="evaluationStar"
            onClick={() => setValueForEvaluation(3)}
            onMouseOver={() => setTempEvaliationValue(3)}
            onMouseOut={() => setTempEvaliationValue(evaliationValue)}
          >
            {evaliationValue >= 3 || tempEvaliationValue >= 3
              ? IconStarFavoritesActive
              : IconStarFavoritesDesable}
          </button>
          <button
            className="evaluationStar"
            onClick={() => setValueForEvaluation(4)}
            onMouseOver={() => setTempEvaliationValue(4)}
            onMouseOut={() => setTempEvaliationValue(evaliationValue)}
          >
            {evaliationValue >= 4 || tempEvaliationValue >= 4
              ? IconStarFavoritesActive
              : IconStarFavoritesDesable}
          </button>
          <button
            className="evaluationStar"
            onClick={() => setValueForEvaluation(5)}
            onMouseOver={() => setTempEvaliationValue(5)}
            onMouseOut={() => setTempEvaliationValue(evaliationValue)}
          >
            {evaliationValue >= 5 || tempEvaliationValue >= 5
              ? IconStarFavoritesActive
              : IconStarFavoritesDesable}
          </button>
        </span>
        <button className="sendEvaluation">Avaliar</button>
      </div>
      <textarea
        className="inputDescription"
        placeholder="Escreve um breve comentario sobre sua estadia nessa propriedade."
        value={""}
      />
    </div>
  );
}
