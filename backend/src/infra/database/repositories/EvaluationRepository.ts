import { EvaluationCreationDTO } from '../interfaces/evalutation.interface';
import { Evaluation } from '../typeorm/entities/Evaluation.entity';

export default abstract class EvaluationRepository {
  abstract getAllByReservationId(id: string): Promise<Evaluation[]>;
  abstract getAllByUserAndReservationId(
    userId: string,
    reservationId: string,
  ): Promise<Evaluation[]>;
  abstract create(creationDTO: EvaluationCreationDTO): Promise<void>;
}
