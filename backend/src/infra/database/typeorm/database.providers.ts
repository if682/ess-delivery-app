import { postgreDatasource } from './datasource';

export const databaseProviders = {
  provide: 'DATA_SOURCE',
  useFactory: async () => {
    return postgreDatasource.initialize();
  },
};
