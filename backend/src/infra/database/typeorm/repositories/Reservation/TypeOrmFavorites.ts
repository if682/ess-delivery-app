import { EntityManager, Repository } from 'typeorm';
import { Favorite } from '../../entities/Favorites.entity';
import { Inject } from '@nestjs/common';
import FavoritesRepository from 'src/infra/database/repositories/FavoritesRepository';
import { postgreDatasource } from '../../datasource';

export default class TypeormFavoritesRepository implements FavoritesRepository {
  constructor(
    @Inject('FAVORITES_REPOSITORY')
    private favoritesRepository: Repository<Favorite>,
  ) {}

  async getAllByUserId(id: string): Promise<Favorite[]> {
    const favorites = await this.favoritesRepository.find({
      where: {
        userId: id,
      },
    });
    return favorites;
  }

  async create(userId: string, reservationId: string): Promise<void> {
    const newFavorite = new Favorite();

    Object.assign(newFavorite, {
      reservationId,
      userId,
    });

    await this.favoritesRepository.save(newFavorite);
  }

  async delete(userId: string, reservationId: string): Promise<void> {
    const manager = new EntityManager(postgreDatasource);

    const favorites = await this.favoritesRepository.find({
      where: {
        reservationId,
        userId,
      },
    });

    await manager.remove(favorites);
  }

  async getByUserAndReservationId(
    userId: string,
    reservationId: string,
  ): Promise<Favorite> {
    const favorite = await this.favoritesRepository.findOne({
      where: {
        reservationId,
        userId,
      },
    });

    return favorite;
  }
}
