import { DataSource } from 'typeorm';
import { ADMUserContact } from '../entities/ADMUserContact.entity';

export const UserContactProviders = [
  {
    provide: 'USER_CONTACT_REPOSITORY',
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(ADMUserContact),
    inject: ['DATA_SOURCE'],
  },
];
