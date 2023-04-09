import "./index.css";
import {
  IconStarFavoritesActive,
  IconStarFavoritesDesable,
} from "../../assets/icons";
import { useCallback, useState } from "react";
import { useSession } from "../../providers/SessionContext";
import { APIClient } from "../../../services/api/client";
import Modal from "../Modal";

export interface PropsEvaluations {
  userName: string;
  text: string;
  star: number;
  reservationId: string;
  userId: string;
}

interface PropsEvaluateFild {
  evaluation?: PropsEvaluations;
  reservationId: string;
}

export default function EvaluateFild({
  evaluation,
  reservationId,
}: PropsEvaluateFild) {
  const [evaliationValue, setEvaliationValue] = useState(evaluation?.star || 0);
  const [tempEvaliationValue, setTempEvaliationValue] = useState(0);
  const [evaluationDescription, setEvaluationDescription] = useState(
    evaluation?.text || ""
  );
  const [modal, setModal] = useState(false);
  const [modalTittle, setModalTittle] = useState("");
  const [modalDescription, setModalDescription] = useState("");

  const setValueForEvaluation = (value: number) => {
    if (value === evaliationValue) {
      setEvaliationValue(0);
    } else {
      setEvaliationValue(value);
    }
  };

  const { session } = useSession();

  const sendEvaluation = useCallback(async () => {
    const apiClient = new APIClient();
    try {
      const id = await apiClient.getIdByToken(session.token);
      await apiClient.createEvaluation({
        reservationId,
        userId: id,
        star: evaliationValue,
        text: evaluationDescription,
        userName: session.userName,
      });
      setModalTittle("Avaliação feita com sucesso");
      setModalDescription(
        "Sua avaliação foi realizada com sucesso, a CINVAGO agradece seu feedback."
      );
      setModal(true);
    } catch {
      setModalTittle("Ocorreu um erro");
      setModalDescription(
        "Não foi possivel registrar sua avaliação, tente novamente mais tarde."
      );
      setModal(true);
    }
  }, [session, evaliationValue, evaluationDescription]);

  return (
    <>
      <Modal
        isOpen={modal}
        onRequestClose={() => window.location.reload()}
        title={modalTittle}
        description={modalDescription}
        showBlackBackground={true}
      />
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
          <button onClick={sendEvaluation} className="sendEvaluation">
            Avaliar
          </button>
        </div>
        <textarea
          className="inputDescription"
          placeholder="Escreve um breve comentario sobre sua estadia nessa propriedade."
          value={evaluationDescription}
          onChange={(e) => setEvaluationDescription(e.target.value)}
        />
      </div>
    </>
  );
}
