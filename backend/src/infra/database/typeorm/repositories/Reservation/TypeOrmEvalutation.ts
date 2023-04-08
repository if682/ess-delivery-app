import { EvaluationCreationDTO } from 'src/infra/database/interfaces/evalutation.interface';
import EvaluationRepository from 'src/infra/database/repositories/EvaluationRepository';
import { Evaluation } from '../../entities/Evaluation.entity';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';

export class TypeOrmEvaluationRepository implements EvaluationRepository {
  constructor(
    @Inject('EVALUATION_REPOSITORY')
    private evaluationRepository: Repository<Evaluation>,
  ) {}

  getAllByReservationId(id: string): Promise<Evaluation[]> {
    return this.evaluationRepository.find({
      where: {
        reservationId: id,
      },
    });
  }
  getAllByUserAndReservationId(
    userId: string,
    reservationId: string,
  ): Promise<Evaluation[]> {
    return this.evaluationRepository.find({
      where: {
        reservationId,
        userId,
      },
    });
  }
  async create(creationDTO: EvaluationCreationDTO): Promise<void> {
    const newEvaluation = new Evaluation();

    Object.assign(newEvaluation, creationDTO);

    await this.evaluationRepository.save(newEvaluation);
  }
}
