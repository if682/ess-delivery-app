import { DataSource } from 'typeorm';
import { Favorite } from '../entities/Favorites.entity';

export const FavoritesProviders = [
  {
    provide: 'FAVORITES_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Favorite),
    inject: ['DATA_SOURCE'],
  },
];
