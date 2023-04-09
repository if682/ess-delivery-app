import { DataSource } from 'typeorm';
import { Evaluation } from '../entities/Evaluation.entity';

export const EvalutationProvider = [
  {
    provide: 'EVALUATION_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(Evaluation),
    inject: ['DATA_SOURCE'],
  },
];
